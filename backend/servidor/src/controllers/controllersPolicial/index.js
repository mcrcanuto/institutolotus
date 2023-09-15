const knex = require("../../database/database");
const jwt = require("jsonwebtoken");

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
            const result = await knex("Polícia").where("pol_cpf", cpf);

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

            const policial = {nome : pol_nome, sobrenome : pol_sobrenome, email: pol_email, pol_cpf: pol_cpf}
            
            const token = jwt.sign( //criação de token
                policial,
                "chave",
                {expiresIn: '3h'}
            );

            return res.status(201).json({token : token});
        }
        catch(error) {
            return res.status(400).json({error : error.message});
        }
    },

    async loginPolicial(req, res) {
        try {
            const {email} = req.params;
            const {senha} = req.params;
            const consult = await knex('Polícia').where("pol_email", email);
            if (consult != "") {
                const pass = consult[0].pol_senha.toString();
                bcrypt.compare(senha, pass).then((result) => {
                    if(result) {
                        const policial = {nome : consult[0].pol_nome, sobrenome : consult[0].pol_sobrenome, email: consult[0].pol_email, pol_cpf: consult[0].pol_cpf}
                            
                        const token = jwt.sign( //criação de token
                            user,
                            "chave",
                            {expiresIn: '3h'}
                        );

                        return res.status(201).json({token : token})
                    }
                    else {
                        return res.status(401).json({msg: "Não existe policial com essa informações"});
                    }
                }).catch((err) => {
                    return res.status(400).json({error: err.message})
                });
            }
            else {
                return res.status(401).json({msg: "Não existe polical com essa informações"});
            }
        }
        catch(error) {
            return res.status(400).json({error: error.message});
        }
    },

    async atualizarPolicial(req, res) {
        try {
            const {cpf} = req.params;
            const {pol_nome, pol_sobrenome, pol_email, pol_cpf, pol_senha} = req.body;

            const consult = await knex("Polícia").where("pol_cpf", cpf);
            if(consult != "") {
                await knex("Polícia").update({
                    pol_nome,
                    pol_sobrenome,
                    pol_email,
                    pol_cpf,
                    pol_senha
                }).where("pol_cpf", cpf);

                const policial = {nome : consult[0].pol_nome, sobrenome : consult[0].pol_sobrenome, email: consult[0].pol_email, pol_cpf: consult[0].pol_cpf}
                
                const token = jwt.sign( //criação de token
                    policial,
                    "chave",
                    {expiresIn: '3h'}
                );
                return res.status(201).json({token : token});
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