/* Arquivo que cria um servidor express, configura e o exporta. */
const express = require("express");

const app = express();
/*
app.get("/empresas", (req, res) => {
  const RegimeTributario = {
    MEI: "MEI",
    SIMPLES_NACIONAL: "SIMPLES NACIONAL",
    LUCRO_PRESUMIDO: "LUCRO PRESUMIDO",
    LUCRO_REAL: "LUCRO REAL",
  };
  const empresas = [
    {
      id: 1,
      razaoSocial: "Razão social da empresa",
      nomeFantasia: "Nome fantasia da empresa",
      enderecoCompleto:
        "Av. minha avenida, 1001 - Meu Bairro, Minha cidade - UF, 00000-000",
      email: "seuemail@hotmail.com",
      site: "www.site.com.br",
      telefone: "(83) 9 9821-1866",
      cnpj: "00.000.000/0001-00",
      inscricaoEstadual: "000000000",
      matrizId: null,
      metragem: 120,
      numeroFuncionarios: 30,
      numeroPdvs: 2,
      regimeTributario: RegimeTributario.SIMPLES_NACIONAL,
    },
  ];
  res.json(empresas);
});

module.exports = app;
*/

app.get("/empresas", (req, res) => {
  const empresas = [
    {
      id: 1,
      razaoSocial: "Razão social da empresa",
      nomeFantasia: "Nome fantasia da empresa",
      enderecoCompleto:
        "Av. minha avenida, 1001 - Meu Bairro, Minha cidade - UF, 00000-000",
      email: "seuemail@hotmail.com",
      site: "www.site.com.br",
      telefone: "(83) 9 9821-1866",
      cnpj: "00.000.000/0001-00",
      inscricaoEstadual: "000000000",
      matrizId: 1,
      metragem: 120,
      numeroFuncionarios: 30,
      numeroPdvs: 3,
      regimeTributario: "regime tributario",
    },
  ];
  res.send(empresas);
});

app.get("/empresas/regimetributario", (req, res) => {
  const regimeTributario = {
    mei: "mei",
    simplesNacional: "simples nacional",
    lucroPresumido: "lucro presumido",
    lucroReal: "lucro real",
  };
  res.send(regimeTributario);
});

app.get("/matriz/:matrizId", (req, res) => {});
