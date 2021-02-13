const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('note', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        note_id: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING
			
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
			
        },
        body: {
            allowNull: false,
            type: DataTypes.STRING
			
        },
        creation_date: {
            allowNull: false,
            type: DataTypes.DATE
			
        }
    },{timestamps: false,freezeTableName: true,tableName: 'note'});
};