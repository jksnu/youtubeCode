const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize connection
/*const sequelize = new Sequelize('mytestdb', 'jitendraadmin', 'jks12jk123', {
    host: 'mytestdb.cfai2mi0yv43.ap-southeast-2.rds.amazonaws.com',
    dialect: 'mysql', // Specify the dialect (in this case, MySQL)
    operationsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});*/
const sequelize = new Sequelize('testdb', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql', // Specify the dialect (in this case, MySQL)
    operationsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
module.exports = db;

// Close Sequelize connection when the Node.js process exits
process.on('exit', () => {
    sequelize.close()
      .then(() => {
        console.log('Sequelize connection closed');
      })
      .catch((error) => {
        console.error('Error closing Sequelize connection:', error);
      });
  });
  
  // Handle Ctrl+C or SIGINT signal to gracefully close the connection
  process.on('SIGINT', () => {
    sequelize.close()
      .then(() => {
        console.log('Sequelize connection closed');
        process.exit(0);
      })
      .catch((error) => {
        console.error('Error closing Sequelize connection:', error);
        process.exit(1);
      });
  });
  
  // Handle uncaught exceptions and promise rejections
  process.on('uncaughtException', (error) => {
    console.log(error);
    sequelize.close()
      .then(() => {
        console.log('Sequelize connection closed');
        process.exit(1);
      })
      .catch((closeError) => {
        console.error('Error closing Sequelize connection:', closeError);
        process.exit(1);
      });
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    sequelize.close()
      .then(() => {
        console.log('Sequelize connection closed');
        process.exit(1);
      })
      .catch((closeError) => {
        console.error('Error closing Sequelize connection:', closeError);
        process.exit(1);
      });
  });
  
  
