const knex = require("../../database/database");

module.exports = {
    async pesquisarAcompanhamentos(req, res) {
        try {
            const result = await knex("Acompanhamento");
            return res.status(201).json(result);
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async pesquisarAcompanhamentoDenuncia(req, res) {
        try {
            const {protocolo} = req.params;

            if(await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                const result = await knex("Acompanhamento").where("Denúncia_den_protocolo", protocolo);
                return res.status(201).json(result);
            }
            return res.status(401).json({msg :  "Essa denúncia não existe no banco de dados."})
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async pesquisarAcompanhamentoPolicial(req, res) {
        try {
            const {distintivo} = req.params;

            if(await knex("Polícia").where("pol_distintivo", distintivo) != "") {
                const result = await knex("Acompanhamento").where("Polícia_pol_distintivo", distintivo);
                return res.status(201).json(result);
            }
            return res.status(401).json({msg :  "Esse policial não existe no banco de dados."});
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async criarAcompanhamento(req, res) {
        try {
            const {Polícia_pol_cpf, Denúncia_den_protocolo, aco_status, aco_comentario} = req.body;

            const consult = await knex("Polícia").where("pol_cpf", Polícia_pol_cpf);
            const aco_date = new Date();
            if (consult != "") {
                const pol_nome = consult[0].pol_nome;
                if (await knex("Denúncia").where("den_protocolo", Denúncia_den_protocolo) != "") {
                    await knex("Acompanhamento").insert({
                        Polícia_pol_cpf,
                        Denúncia_den_protocolo,
                        aco_status,
                        aco_data : aco_date,
                        aco_comentario,
                        pol_nome
                    });

                    if(aco_status == "Denúncia Finalizada") {
                        await knex("Denúncia").update({
                           den_status : "Finalizada"
                        }).where("den_protocolo", Denúncia_den_protocolo);
                    }
                    return res.status(201).json({msg : "Acompanhamento enviado"});
                }
                return res.status(401).json({msg : "Não existe essa denúncia no banco de dados"});
            }
            return res.status(401).json({msg : "Não existe esse policial no banco de dados"});
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async atualizarAcompanhamento(req, res) {
        try {
            const {id} = req.params;
            const {aco_status, aco_comentario} = req.body;

            const consult = await knex("Acompanhemento").where("aco_id", id);
            if (consult) {
                await knex("Acompanhamento").update({                
                    aco_status,
                    aco_comentario,
                }).where("aco_id", id);
                return res.status(201).json({msg : "Acompanhamento atualizado"});
            }
            return res.status(401).json({msg : "Esse acompanhamento não está registrado no banco de dados."});
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async apagarAcompanhamento(req, res) {
        try {
            const {id} = req.params;

            if (await knex("Acompanhamento").where("aco_id", id) != "") {
                await knex("Acompanhamento").del().where("aco_id", id);

                return res.status(201).json({msg : "Acompanhamento deletado"});
            }
            return res.status(401).json({msg : "Esse acompanhamento não existe no banco de dados"});
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    }
}