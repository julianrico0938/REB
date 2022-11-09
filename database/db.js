import { Sequelize } from "sequelize";

const db = new Sequelize("database_app", "root", "Apachertr200*",{
    host: "localhost",
    dialect: "mysql"
});

export default db;