"use client";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useEffect, useState, useRef } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Mic, Video, PhoneOff } from "lucide-react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function VideoCallPage() {

const [seconds, setSeconds] = useState(300);

const [status, setStatus] = useState("Listening...");

const [avatar, setAvatar] = useState("");

const [avatarImage, setAvatarImage] = useState("");

const [aiReply, setAiReply] = useState("");

const [messages, setMessages] = useState<any[]>(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
});

const [loading, setLoading] = useState(false);

const [isSpeaking, setIsSpeaking] = useState(false);

const [isTyping, setIsTyping] = useState(false);

const messagesEndRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  localStorage.setItem(
    "chatHistory",
    JSON.stringify(messages)
  );
}, [messages]);

const {
  transcript,
  listening,
  resetTranscript,
} = useSpeechRecognition();

useEffect(() => {
  if (
    transcript &&
    transcript.length > 10 &&
    !loading
  ) {
    sendToAI(transcript);
  }
}, [transcript]);

const browserSupportsSpeechRecognition =
  SpeechRecognition.browserSupportsSpeechRecognition();

const sendToAI = async (message: string) => {
  try {
    setLoading(true);

    const response = await fetch(
      "http://127.0.0.1:8000/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }
    );

    const data = await response.json();

console.log("RAW REPLY:");
console.log(data.reply);

    setMessages((prev) => [
  ...prev,
  {
    role: "user",
    content: transcript,
  },
  {
    role: "assistant",
    content: data.reply,
  },
]);
console.log("RADHA SPEAKING", data.reply);

const speech = new SpeechSynthesisUtterance(data.reply);

const voices = window.speechSynthesis.getVoices();

console.log("VOICES:", voices);

speech.voice =
  voices.find((v) => v.lang.includes("hi")) ||
  voices[0];

speech.lang = "hi-IN";

speech.onstart = () => {
  setIsSpeaking(true);
};

speech.onend = () => {
  setIsSpeaking(false);
};

speech.rate = 1;
speech.pitch = 1;

console.log("SPEAK FUNCTION RUNNING");
alert("Radha bolne wali hai");
window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);

setAiReply(data.reply);

  } catch (error) {
    console.error(error);
    setAiReply("AI connection error");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

useEffect(() => {
  const savedAvatar = localStorage.getItem("avatar");

  if (savedAvatar === "girl") {
    setAvatarImage("/avatars/ai-girl.jpg");
  }

  if (savedAvatar === "boy") {
    setAvatarImage("/avatars/ai-boy.jpg");
  }

  if (savedAvatar === "business") {
    setAvatarImage("/avatars/business.jpg");
  }

  if (savedAvatar === "teacher") {
    setAvatarImage("/avatars/teacher.jpg");
  }

  if (savedAvatar) {
    setAvatar(savedAvatar);
  }
}, []);

useEffect(() => {
 const statuses = [
  "LISTENING",
  "PROCESSING",
  "RESPONDING"
];
  let index = 0;

  const interval = setInterval(() => {
    index = (index + 1) % statuses.length;
    setStatus(statuses[index]);
  }, 3000);

  return () => clearInterval(interval);
}, []);
 useEffect(() => {
  const timer = setInterval(() => {
    setSeconds((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;

  return (
  <main
  className={`${inter.className} relative min-h-screen bg-black text-white overflow-hidden`}
>
<div className="absolute top-10 left-1/2 -translate-x-1/2 text-white">
  {transcript}
</div>

<div className="text-white absolute top-5 left-5 z-50">
  Listening: {listening ? "YES" : "NO"}
  <br />
  Transcript: {transcript}
</div>

{/*
<div className="text-white">
  Support: {browserSupportsSpeechRecognition ? "YES" : "NO"}
</div>
*/}

<div className="absolute top-10 left-1/2 -translate-x-1/2 z-50">
{avatarImage && (
  <img
    src={avatarImage}
    alt="avatar"
    className={`
      w-30
      h-30 
      object-cover
      rounded-full
      transition-all
      duration-300
      ${isSpeaking ? "scale-110 animate-pulse" : ""}
    `}
  />
)}
</div>

<div className="mt-6 text-center text-white px-6">
 {loading ? (
  <p>Thinking...</p>
) : (
  <div
    className="
      text-left
      text-white
      text-lg
      leading-8
      max-w-3xl
      mx-auto
      prose
      prose-invert
    "
  >
   <div className="max-w-6xl mx-auto space-y-6 text-left">

<div ref={messagesEndRef}></div>

  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.role === "user"
  ? "bg-blue-600 text-white"
  : "bg-zinc-800 text-white"
      }`}
    >
      <div
     className={`max-w-4xl w-full px-6 py-4 rounded-3xl shadow-lg ${
          msg.role === "user"
            ? "bg-blue-600 text-white"
            : "bg-white/10 text-white backdrop-blur-md"
        }`}
      >
    <div
  className="
    prose
    prose-invert
    prose-lg
    max-w-none
    text-left
  "
>
  <ReactMarkdown
  remarkPlugins={[remarkGfm]}
>
{`# TEST

## Heading

### Sub Heading

- One
- Two

**Bold Text**
`}
</ReactMarkdown>
</div>
      </div>
    </div>
  ))}
</div>
  </div>
)}
</div>

<div
  className="
    absolute
    bottom-4
    left-1/2
    -translate-x-1/2
    text-center
  "
>
  <span
    className="
text-white/80
text-[11px]
font-light
tracking-[0.3em]
uppercase
"
  >
    {status}
  </span>

  <div
    className="
      mt-2
      h-[1px]
      w-32
      mx-auto
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
    "
  />
</div>

<div className="absolute top-6 right-6 z-20">
  <div
  className="
    text-white/100
    text-[13px]
    font-light
    tracking-[0.25em]
  "
>
 <div
  className="
    absolute
    bottom-32
    left-1/2
    -translate-x-1/2
    text-center
  "
>
  <div
    className="
      text-white/75
      text-sm
      font-light
      tracking-[0.25em]
    "
  >
    {minutes}:{remainingSeconds.toString().padStart(2, "0")}
  </div>
</div>
</div>
</div>

      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 z-20">

        <div className="relative w-12 h-12">

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-yellow-400 to-pink-500 p-[1px]">

            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">

              <svg
                width="50"
                height="20"
                viewBox="0 0 120 40"
              >
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8122ee" />
                    <stop offset="50%" stopColor="#f3dc0e" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>

                <path
                  d="
                    M0 20
                    C10 5,20 5,30 20
                    S50 35,60 20
                    S80 5,90 20
                    S110 35,120 20
                  "
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>

            </div>
          </div>
        </div>

      </div>

<div
  className="
    absolute
    bottom-32
    left-1/2
    -translate-x-1/2
    z-50
  "
>
  <span
    className="
      text-white
      text-xl
      font-semibold
    "
  >
    {minutes}:{remainingSeconds.toString().padStart(2, "0")}
  </span>
</div>

      {/* Bottom Apple Controls */}
      <div
        className="
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          flex
          items-center
          gap-6
        "
      >

        {/* Mic */}
   <button
  className="liquid-btn"
 onClick={async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    alert("Microphone OK");
SpeechRecognition.startListening({
  continuous: false,
  language: "hi-IN",
});

  } catch (err) {
    alert("Mic Error");
    console.log(err);
  }
}}
>
  <Mic size={24} />
</button>
        {/* End Call */}
<button className="liquid-btn liquid-end-btn">
  <PhoneOff size={24} className="text-white" />
</button>

        {/* Camera */}
     <button className="liquid-btn">
  <Video size={24} />
</button>
      </div>

    </main>
  );
}