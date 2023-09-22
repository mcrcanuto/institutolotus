const express = require('express');
const auth = require('./middleware/auth');

const routes = express.Router();

const controllersAgressor = require("./controllers/controllersAgressor/index");
const controllersDenuncias = require("./controllers/controllersDenuncia/index");
const controllersPolicial = require("./controllers/controllersPolicial/index");
const controllersAcompanhamento = require('./controllers/controllersAcompanhamento/index');

//rotas do agressor
routes.get("/agressor", controllersAgressor.procurarAgressores);
routes.get("/agressor/id/:id", controllersAgressor.procurarAgressorId);
routes.get("/agressor/protocolo/:protocolo", controllersAgressor.procurarAgressorProtocolo);
routes.post("/agressor", controllersAgressor.criarAgressor);
routes.put("/agressor/:id", controllersAgressor.atualizarAgressor);
routes.delete("/agressor/:id", controllersAgressor.apagarAgressor);

//rotas denuncia
routes.get("/denuncia", controllersDenuncias.procurarDenuncias);
routes.get("/denuncia/protocolo/:protocolo", controllersDenuncias.procurarDenunciaProtocolo);
routes.post("/denuncia", controllersDenuncias.criarDenuncia);
routes.delete("/denuncia/:protocolo", controllersDenuncias.apagarDenuncia);

routes.get("/denuncia/imagem/:filename", controllersDenuncias.retornarImagens);
routes.put("/denuncia/imagem", controllersDenuncias.uploadImg);

//rotas policial
routes.get("/policial", controllersPolicial.pesquisarPoliciais);
routes.get("/policial/login/:email/:senha", controllersPolicial.loginPolicial);
routes.get("/policial/nome/:nome", controllersPolicial.pesquisarPolicialNome);
routes.get("/policial/cpf/:cpf", auth ,controllersPolicial.pesquisarPolicialCPF);
routes.get("/policial/denuncia/:protocolo", controllersPolicial.pesquisarPoliciaisDenuncia);
routes.post("/policial", controllersPolicial.criarPolicial);
routes.put("/policial/:cpf", auth ,controllersPolicial.atualizarPolicial);
routes.delete("/policial/:cpf", auth ,controllersPolicial.apagarPolicial);

//rotas acompanhamentos
routes.get("/acompanhamento", controllersAcompanhamento.pesquisarAcompanhamentos);
routes.get("/acompanhamento/policial/:cpf", controllersAcompanhamento.pesquisarAcompanhamentoPolicial);
routes.get("/acompanhamento/denuncia/:protocolo", controllersAcompanhamento.pesquisarAcompanhamentoDenuncia);
routes.post("/acompanhamento", controllersAcompanhamento.criarAcompanhamento);
routes.put("/acompanhamento/:id", controllersAcompanhamento.atualizarAcompanhamento);
routes.delete("/acompanahmento/:id", controllersAcompanhamento.apagarAcompanhamento);

module.exports = routes;