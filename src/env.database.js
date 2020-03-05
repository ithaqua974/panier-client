/**
 * Vous devez créer le fichier env.database.js en suivant ce modèle et en complétant les informations de votre base de donnée locale.
 */

const DATABASE = {};

DATABASE.LOCAL = {
    DBNAME: "panier-client-db",
    USERNAME: "root",
    PASSWORD: ""
}

DATABASE.PROD = {
    DBNAME: "",
    USERNAME: "",
    PASSWORD: ""
}

module.exports = DATABASE;