module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
        Name: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        Location: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        Duration: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        Available_starts: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
    });
    return Course;
};