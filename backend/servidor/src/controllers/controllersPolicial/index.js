const knex = require("../../database/database");

module.exports = {
    async pesquisarPoliciais(req, res) {
        try {
            const result = await knex("Polícia");
            return res.status(201).json(result);
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async pesquisarPolicialNome(req, res) {
        try {
            const {nome} = req.params;
            const result = await knex("Polícia").where("pol_nome", "like", `%${nome}%`);

            if(result != "") return res.status(201).json(result);
            return res.status(401).json({msg : `Não existe nenhum polícial com "${nome}" dentro do nome registrado no sistema.`});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async pesquisarPolicialCPF(req, res) {
        try {
            const {cpf} = req.params;
            const result = await knex("Polícia").where("pol_distintivo", cpf);

            if(result != "") return res.status(201).json(result);
            return res.status(401).json({msg : "Não há polícial com esse cpf registrado no sistema."})
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },
    
    async pesquisarPoliciaisDenuncia(req, res) {
        try {
            const {protocolo} = req.params;

            if (await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                const consult2 = await knex("Acompanhamento").where("Denúncia_den_protocolo", protocolo);
                if(consult2 != "") {
                    let result = [];
                    for (let i = 0; i < consult2.length; i++) {
                        result.push(await knex("Polícia").where("pol_cpf", consult2[i].Polícia_pol_cpf));
                    }
                    return res.status(201).json(result);
                }
                return res.status(401).json({msg : "Ainda não existem acompanhamentos desta denúncia."});
            }
            return res.status(401).json({msg : "Esta denúncia não existe"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async criarPolicial(req, res) {
        try {
            const {pol_nome, pol_sobrenome, pol_email, pol_cpf, pol_senha} = req.body;

            if (await knex("Polícia").where("pol_cpf", pol_cpf) != "") {
                return res.status(401).json({msg : "Esse polícial já esta registrado"});
            }
            await knex("Polícia").insert({
                    pol_nome,
                    pol_sobrenome,
                    pol_email,
                    pol_cpf,
                    pol_senha
            });

            return res.status(201).json({msg : "Policial criado com sucesso"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async atualizarPolicial(req, res) {
        try {
            const {cpf} = req.params;
            const {pol_nome, pol_sobrenome, pol_email, pol_cpf, pol_senha} = req.body;

            if(await knex("Polícia").where("pol_cpf", cpf) != "") {
                await knex("Polícia").update({
                    pol_nome,
                    pol_sobrenome,
                    pol_email,
                    pol_cpf,
                    pol_senha
                }).where("pol_cpf", cpf);
                return res.status(201).json({msg : "Polícial atualizado com sucesso"});
            }
            return res.status(401).json({msg : "Este polícial não está registrado no sistema"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async apagarPolicial(req, res) {
        try {
            const {cpf} = req.params;

            if(await knex("Polícia").where("pol_cpf", cpf) != "") {
                await knex("Polícia").del().where("pol_cpf", cpf);
                return res.status(201).json({msg : "Polícial apagado com sucesso!"});
            }
            return res.status(401).json({msg : "Este polícial não existe!"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    }
}