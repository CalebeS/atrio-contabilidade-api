const sequelize = require("sequelize");

class Empresa extends sequelize.Model {
  static initialize(sequelizeInstance) {
    Empresa.init(
      {
        razaoSocial: sequelize.DataTypes.STRING,
        nomeFantasia: sequelize.DataTypes.STRING,
        enderecoCompleto: sequelize.DataTypes.STRING,
        email: sequelize.DataTypes.STRING,
        site: sequelize.DataTypes.STRING,
        telefone: sequelize.DataTypes.STRING,
        cnpj: sequelize.DataTypes.STRING,
        inscricaoEstadual: sequelize.DataTypes.STRING,
        matrizId: sequelize.DataTypes.STRING,
        metragem: sequelize.DataTypes.FLOAT,
        numeroFuncionarios: sequelize.DataTypes.INTEGER,
        numeroPdvs: sequelize.DataTypes.INTEGER,
        regimeTributario: sequelize.DataTypes.STRING,
      },
      { sequelize: sequelizeInstance }
    );
  }
}
module.exports = Empresa;
