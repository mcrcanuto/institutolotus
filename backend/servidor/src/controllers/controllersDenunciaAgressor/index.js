const knex = require("../../database/database");

module.exports = {
    async pesquisarRelacionamentos(req, res) {
        try {
            const result = await knex("Denúncia_has_Agressor");
            return res.status(201).json(result);
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async pesquisarRelacionamentoAgressor(req, res) {
        try {
            const {agr_id} = req.params;

            if(await knex("Agressor").where("agr_id", agr_id) != "") {
                const result = await knex("Denúncia_has_Agressor").where("Agressor_agr_id", agr_id);
                return res.status(201).json(result);
            }
            return res.status(401).json({msg : "Esse agressor não está registrado no sistema"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async pesquisarRelacionamentoDenuncia(req, res) {
        try {
            const {protocolo} = req.params;

            if(await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                const result = await knex("Denúncia_has_Agressor").where("Denúncia_den_protocolo", protocolo);
                return res.status(201).json(result);
            }
            return res.status(401).json({msg : "Esse agressor não está registrado no sistema"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async pesquisarRelacionamentoKeys(req, res) {
        try {
            const {protocolo, agr_id} = req.params;
            if(await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                if(await knex("Agressor").where("agr_id", agr_id) != "") {
                    const result = await knex("Denúncia_has_Agressor").where("Denúncia_den_protocolo", protocolo).where("Agressor_agr_id", agr_id);
                    return res.status(201).json(result);
                }
                return res.status(401).json({msg : "Esse agressor não tem registro no sistema"});
            }
            return res.status(401).json({msg : "Essa denúncia não tem registro no sistema"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async criarRelacionamento(req, res) {
        try {

            const {protocolo, agr_id} = req.body;
            if(await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                if(await knex("Agressor").where("agr_id", agr_id) != "") {
                    await knex("Denúncia_has_Agressor").insert({
                        Denúncia_den_protocolo : protocolo,
                        Agressor_agr_id : agr_id
                    });
                    return res.status(201).json({msg : "Relacionamento criado"});
                }
                return res.status(401).json({msg : "Esse agressor não tem registro no sistema"});
            }
            return res.status(401).json({msg : "Essa denúncia não tem registro no sistema"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },
    
    async apagarRelacionamento(req, res) {
        try {
            const {protocolo, agr_id} = req.params;
            if(await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                if(await knex("Agressor").where("agr_id", agr_id) != "") {
                    await knex("Denúncia_has_Agressor").del().where("Denúncia_den_protocolo", protocolo).where("Agressor_agr_id", agr_id);
                    return res.status(201).json({msg : "Relacionamento apagado!"});
                }
                return res.status(401).json({msg : "Esse agressor não tem registro no sistema"});
            }
            return res.status(401).json({msg : "Essa denúncia não tem registro no sistema"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    }
}