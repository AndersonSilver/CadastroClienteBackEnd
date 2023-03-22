const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.listen(3000, err =>{
    if(err){
        console.log("Servidor nao aberto");
    }else{
        console.log("Servidor aberto com sucesso: http://localhost:3000");
    }
})

let BancoDeDados = {
    CadatroPessoal:[
        {
            id: 1,
            nome: "Anderson",
            sobrenome: "Silveira",
            sexo: "M",
            celular: 35992089753,
            nascimento: 14031996,
            email: "andersonsilver18@gmail.com",
            cpf: 12605424677,
            cep: 37530000,
            rua: "Avenida Manoel Joaquim",
            numeroCasa: "634",
            complemento: "casa",
            referencia: "Perto Quadro",
            bairro: "Bela Vista",
            cidade: "Brazópolis",
            estado: "MG",
        },
        {
            id: 2,
            nome: "Felipe",
            sobrenome: "Ribeiro",
            sexo: "M",
            celular: 35997839322,
            nascimento: 14031996,
            email: "FelipeRibeiro@gmail.com",
            cpf: 12789324588,
            cep: 37535987,
            rua: "Avenida Juscelino Kubtchequi",
            numeroCasa: "234",
            complemento: "casa",
            referencia: "Perto SuperMercado",
            bairro: "Beija Flor",
            cidade: "Campinas",
            estado: "SP",
        }
    ]
}

app.get("/cadastro", (req,res)=>{
    res.statusCode == 200;
    res.json(BancoDeDados.CadatroPessoal)
})

app.get("/cadastro/:id", (req,res)=>{

    let id = parseInt(req.params.id);

    if(isNaN(id)){
        res.statusCode = 400;
    }else{

        let cadastro = BancoDeDados.CadatroPessoal.find(g => g.id == id)

        if(id != undefined){
            res.json(cadastro);
            res.statusCode = 200;
        }else{
            res.statusCode = 400;
        }
    }
})

app.post("/cadastro", (req,res)=>{

    let { 
            id,
            nome,
            sobrenome,
            sexo,
            celular,
            nascimento,
            email,
            cpf,
            cep,
            rua,
            numeroCasa,
            complemento,
            referencia,
            bairro,
            cidade,
            estado
    } = req.body;

    let aletório = Math.floor(Math.random() * 100)

    BancoDeDados.CadatroPessoal.push({
            id:aletório,
            nome,
            sobrenome,
            sexo,
            celular,
            nascimento,
            email,
            cpf,
            cep,
            rua,
            numeroCasa,
            complemento,
            referencia,
            bairro,
            cidade,
            estado
    })
    res.sendStatus(200);
})

app.delete("/cadastro/:id", (req,res)=>{

    let id = parseInt(req.params.id);

    if(isNaN(id)){
        res.statusCode = 400;
    }else{

        let index = BancoDeDados.CadatroPessoal.find(g => g.id == id)

        if(index != -1){
            BancoDeDados.CadatroPessoal.splice(index,1)
            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }
    }
})

app.put("/cadastro/:id",(req,res)=>{

    let id = parseInt(req.params.id);

    if(isNaN(id)){
        res.statusCode = 400;
    }else{

        let atualizarCadastro = BancoDeDados.CadatroPessoal.find(g => g.id == id)

        if(atualizarCadastro != undefined){

            let { 
                nome,
                sobrenome,
                sexo,
                celular,
                nascimento,
                email,
                cpf,
                cep,
                rua,
                numeroCasa,
                complemento,
                referencia,
                bairro,
                cidade,
                estado
        } = req.body;

        if(nome != undefined){
            atualizarCadastro.nome = nome;
        }
        if(sobrenome != undefined){
        atualizarCadastro.sobrenome = sobrenome;
        }
        if(sexo != undefined){
        atualizarCadastro.sexo = sexo;
        }
        if(celular != undefined){
        atualizarCadastro.celular = celular;
        }
        if(nascimento != undefined){
        atualizarCadastro.nascimento = nascimento;
        }
        if(email != undefined){
        atualizarCadastro.email = email;
        }
        if(cpf != undefined){
        atualizarCadastro.cpf = cpf;
        }
        if(cep != undefined){
        atualizarCadastro.cep = cep;
        }
        if(rua != undefined){
        atualizarCadastro.rua = rua;
        }
        if(numeroCasa != undefined){
        atualizarCadastro.numeroCasa = numeroCasa;
        }
        if(complemento != undefined){
        atualizarCadastro.complemento = complemento;
        }
        if(referencia != undefined){
        atualizarCadastro.referencia = referencia;
        }
        if(bairro != undefined){
        atualizarCadastro.bairro = bairro;
        }
        if(cidade != undefined){
        atualizarCadastro.cidade = cidade;
        }
        if(estado != undefined){
        atualizarCadastro.estado = estado;
        }
        res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }
})