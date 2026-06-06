import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/generate-image', async (req, res) => {

  try {

    const { prompt } = req.body

    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&model=flux&enhance=true`

    res.json({
      success: true,
      image: imageUrl
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false
    })
  }
})

app.listen(5000, () => {
  console.log('🚀 Server Running On Port 5000')
})