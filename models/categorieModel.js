module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define("categorie", {
        Name: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
    });
    return Categorie;
};