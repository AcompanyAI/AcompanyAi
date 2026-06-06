module.exports = {
  apps: [
    {
      name: 'ACOMPANY_FIX',
      script: './index.js',
      cwd: './backend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_memory_restart: '200M',
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    {
      name: 'ACOMPANY_FRONTEND',
      script: './server.js',
      cwd: './frontend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_memory_restart: '300M',
      watch: false,
      ignore_watch: ['node_modules', '.next', 'logs'],
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};

