const express = require('express');
const auth = require('./middleware/auth');

const routes = express.Router();

const controllersAgressor = require("./controllers/controllersAgressor/index");
const controllersDenuncias = require("./controllers/controllersDenuncia/index");
const controllersPolicial = require("./controllers/controllersPolicial/index");
const controllersAcompanhamento = require('./controllers/controllersAcompanhamento/index');
const controllersDenunciaAgressor = require('./controllers/controllersDenunciaAgressor');

//rotas do agressor
routes.get("/agressor", controllersAgressor.procurarAgressores);
routes.get("/agressor/id/:id", controllersAgressor.procurarAgressorId);
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
routes.get("/policial/cpf/:cpf", controllersPolicial.pesquisarPolicialCPF);
routes.get("/policial/denuncia/:protocolo", controllersPolicial.pesquisarPoliciaisDenuncia);
routes.post("/policial", controllersPolicial.criarPolicial);
routes.put("/policial/:cpf", controllersPolicial.atualizarPolicial);
routes.delete("/policial/:cpf", controllersPolicial.apagarPolicial);

//rotas acompanhamentos
routes.get("/acompanhamento", controllersAcompanhamento.pesquisarAcompanhamentos);
routes.get("/acompanhamento/policial/:cpf", controllersAcompanhamento.pesquisarAcompanhamentoPolicial);
routes.get("/acompanhamento/denuncia/:protocolo", controllersAcompanhamento.pesquisarAcompanhamentoDenuncia);
routes.post("/acompanhamento", controllersAcompanhamento.criarAcompanhamento);
routes.put("/acompanhamento/:id", controllersAcompanhamento.atualizarAcompanhamento);
routes.delete("/acompanahmento/:id", controllersAcompanhamento.apagarAcompanhamento);

//rotas relacionamentos
routes.get("/relacionamento", controllersDenunciaAgressor.pesquisarRelacionamentos);
routes.get("/relacionamento/denuncia/:protocolo", controllersDenunciaAgressor.pesquisarRelacionamentoDenuncia);
routes.get("/relacionamento/agressor/:agr_id", controllersDenunciaAgressor.pesquisarRelacionamentoAgressor);
routes.get("/relacionamento/key/:agr_id/:protocolo", controllersDenunciaAgressor.pesquisarRelacionamentoKeys);
routes.post("/relacionamento", controllersDenunciaAgressor.criarRelacionamento);
routes.delete("/relacionamento/:agr_id/:protocolo", controllersDenunciaAgressor.apagarRelacionamento);

module.exports = routes;