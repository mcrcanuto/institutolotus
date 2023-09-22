const knex = require("../../database/database")

module.exports = {
    async procurarAgressores(req, res) {
        try {
            const result = await knex("Agressor");
            return res.status(201).json(result);
        }
        catch (error) {
            return res.status(400).json({error : error.message})
        }
    },

    async procurarAgressorId(req, res) {
        try {
            const {id} = req.params;

            const result = await knex("Agressor").where("agr_id", id);
            if (result  != "") return res.status(201).json(result);
            return res.status(401).json({msg : "Esse agressor não está registrado no sistema."});
        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async procurarAgressorProtocolo(req, res) {
        try {
            const {protocolo} = req.params;

            const result = await knex("Agressor").where("Denuncia_den_protocolo", protocolo);
            if (result  != "") return res.status(201).json(result);
            return res.status(401).json({msg : "Essa Denúncia não está registrada no sistema."});

        }
        catch(error) {
            return res.status(400).json({error : error.message})
        }
    },

    async criarAgressor(req, res) {
        try {
            const {agr_nome, agr_idade, agr_sexo, agr_estatura, agr_tipo_fisico, agr_cor_pele, agr_cor_cabelo, 
                agr_cor_olhos, agr_tipo_cabelo, agr_carac_espec, agr_possui_porte, agr_possibili_fuga, agr_endereco,
            Denuncia_den_protocolo} = req.body;

            let digitos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

            let id = "";

            while(true) {
                for (let i = 0; i < 5; i++) {
                    let random = Math.floor(Math.random() * digitos.length);
                    id = id + digitos[random];
                }
                
                if(await knex("Agressor").where("agr_id", id) == "") {
                    break;
                }
            }
            const agr_id = id;
            
            await knex("Agressor").insert({
                agr_id,
                agr_carac_espec,
                agr_cor_cabelo,
                agr_cor_olhos,
                agr_cor_pele,
                agr_endereco,
                agr_estatura,
                agr_idade,
                agr_nome,
                agr_possibili_fuga,
                agr_possui_porte,
                agr_sexo,
                agr_tipo_fisico,
                agr_tipo_cabelo,
                Denuncia_den_protocolo
            });

            return res.status(201).json({id : agr_id})
        }
        catch (error) {
            return res.status(400).json({error : error.message})
        }
    },

    async atualizarAgressor(req, res) {
        try {
            const {id} = req.params;
            const {agr_nome, agr_idade, agr_sexo, agr_estatura, agr_tipo_fisico, agr_cor_pele, agr_cor_cabelo, 
                agr_cor_olhos, agr_tipo_cabelo, agr_carac_espec, agr_possui_porte, agr_possibili_fuga, agr_endereco} = req.body;

            if(await knex("Agressor").where("agr_id", id) != "") {
                await knex("Agressor").update({
                    agr_carac_espec,
                    agr_cor_cabelo,
                    agr_cor_olhos,
                    agr_cor_pele,
                    agr_endereco,
                    agr_estatura,
                    agr_idade,
                    agr_nome,
                    agr_possibili_fuga,
                    agr_possui_porte,
                    agr_sexo,
                    agr_tipo_fisico,
                    agr_tipo_cabelo
                }).where("agr_id", id);

                return res.status(201).json({msg : "Agressor atualizado com sucesso"});
            }
            return res.status(401).json({msg : "Esse usuário não existe no banco de dados."})
        }
        catch (error) {
            return res.status(400).json({error : error.message})
        }
    },

    async apagarAgressor(req, res) {
        try {
            const {id} = req.params;
            const consult = await knex("Agressor").where("agr_id", id);
            if (consult != "" ) {
                await knex("Agressor").del().where("agr_id", id);
                return res.status(201).json({msg: "Agressor " + consult[0].agr_nome + " apagado com sucesso!"});
            }
            return res.status(401).json({msg : "Esse usuário não existe."})
        }
        catch (error) {
            return res.status(400).json({error : error.message})
        }
    }
}