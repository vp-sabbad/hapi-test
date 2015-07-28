module.exports = function(sequelize, DataTypes) {
    return sequelize.define('project', {
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT }
    });
};
