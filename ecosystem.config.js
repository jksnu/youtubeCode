module.exports = {
  apps : [{    
    name: "Test",
    script: 'app.js',
    instances: "1",
    exec_mode: "cluster",
    watch: true,
    ignore_watch: ["node_modules"]
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    production : {
      
    }
  }
};
