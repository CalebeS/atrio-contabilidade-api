const { Sequelize, Model, DataTypes } = require("sequelize");
const Empresa = require("../models/empresa");

Empresa.initialize();

const sequelize = new Sequelize(
  "postgres://postgres:local@localhost:5432/atriocontabilidade"
);
