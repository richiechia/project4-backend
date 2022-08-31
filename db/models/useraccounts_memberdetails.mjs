export default function userAccountMemberDetailModel(sequelize, DataTypes) {
  return sequelize.define('useraccounts_memberdetails', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    useraccount_id: {
      allowNull : false,
      type: DataTypes.INTEGER
    },
    memberdetail_id : {
      allowNull : false,
      type: DataTypes.INTEGER,
    },
    createdAt : {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt : {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {underscored : true});
}