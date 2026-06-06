#!/usr/bin/env node
const path = require('path');
const { execFile } = require('child_process');

const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';

console.log(`\n🚀 Starting Next.js server on port ${port}...`);
console.log(`Environment: ${process.env.NODE_ENV || 'development'}\n`);

const nextBin = path.join(__dirname, 'node_modules', '.bin', isDev ? 'next' : 'next');
const args = isDev ? ['dev', '--port', port] : ['start', '--port', port];

// For Windows, we need to use the correct path to the next executable
const isWindows = process.platform === 'win32';
const cmd = isWindows ? path.join(__dirname, 'node_modules', '.bin', 'next.cmd') : nextBin;

const child = execFile(cmd, args, {
  stdio: 'inherit',
  env: { ...process.env, PORT: port, NODE_ENV: process.env.NODE_ENV || 'production' }
});

child.on('error', (err) => {
  console.error('Failed to start Next.js:', err.message);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log(`\nNext.js server exited with code ${code}`);
  process.exit(code || 0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  child.kill();
});

process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  child.kill();
});
