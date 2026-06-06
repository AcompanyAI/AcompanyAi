#!/usr/bin/env node
const { execSync } = require('child_process');

const port = process.env.PORT || 3000;
process.env.PORT = port;

console.log(`\n🚀 Starting Next.js frontend on port ${port}...`);

try {
  execSync('npx next start', {
    cwd: __dirname,
    env: { ...process.env, PORT: port },
    stdio: 'inherit'
  });
} catch (error) {
  console.error(`❌ Next.js failed: ${error.message}`);
  process.exit(1);
}

