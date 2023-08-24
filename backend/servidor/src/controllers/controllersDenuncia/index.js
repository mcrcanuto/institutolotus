const knex = require("../../database/database");

module.exports =  {
    async procurarDenuncias(req, res) {   
        try {
            const result = await knex("Denúncia");
            return res.status(201).json(result);
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async procurarDenunciaProtocolo(req, res) {
        try {
            const {protocolo} = req.params;

            const result = await knex("Denúncia").where("den_protocolo", protocolo);
            if(result) return res.status(201).json(result);
            return res.status(401).json({msg : "Não existe denúncia com esse protocolo"});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async criarDenuncia(req, res) {
        try {
            let digitos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            
            const {den_denunciante, den_imagem ,den_violencia, den_frequencia, den_data_ocorrencia, den_hora_ocorrencia, den_local, den_cep, den_ponto_ref, den_carac_local} = req.body;
            let protocolo = "";
            while(true) {
                for (let i = 0; i < 8; i++) {
                    let random = Math.floor(Math.random() * digitos.length);
                    protocolo = protocolo + digitos[random];
                }
                if(await knex("Denúncia").where("den_protocolo", protocolo) == "") {
                    break;
                }
            }

            const den_protocolo = protocolo;
            console.log(den_protocolo);
            
            const data = new Date();
            const den_data_denuncia = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
            
            await knex("Denúncia").insert({
                den_denunciante,
                den_violencia,
                den_protocolo,
                den_carac_local,
                den_imagem,
                den_cep,
                den_data_denuncia,
                den_ponto_ref,
                den_local,
                den_frequencia,
                den_hora_ocorrencia,
                den_data_ocorrencia
            });
            
            return res.status(201).json({protocolo : den_protocolo});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }

    },

    async apagarDenuncia(req, res) {
        try {
            const {protocolo} = req.params;
            if(await knex("Denúncia").where("den_protocolo", protocolo) != "") {
                await knex("Denúncia").del().where("den_protocolo", protocolo);
                return res.status(201).json({msg : "Denúncia apagada"});
            }
            return res.status(401).json({msg : "Essa denúncia não existe."})
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }

    }
}