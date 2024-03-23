module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false // If your table doesn't have timestamp fields (createdAt, updatedAt)
  });
  return UserModel;
}
