const res = require("express/lib/response");
const movies = require("../models/movies.json");
const axios = require("axios");


// criar funções que controlam as informações, recebendo as requisições e enviando as respostas

const home = (req, res) => {
    // console.log('REQUISIÇÃO', req);
    res.status(200).send({
        "message": "Olá, seja bem vindo ao TeraFlix, uma API maneira de filmes!"
    });    
};

// visualizar todos os filmes
const getAll = (req, res) => {
    res.status(200).send(movies);
}


// Cadastrar novo filme

// Deletar um filme do sistema

// Atualizar título do filme


// Outro exemplo: Consumir lista de filmes de API terceira utilizando axios
getAllGhibliMovies = async (req, res) => {
    try{ // tente fazer...
        const response = await axios.get("https://ghibliapi.herokuapp.com/films"); // vai esperar e aguardar a leitura dos dados da url
        const data = response.data;
        res.status(200).send(data);
    } catch(e) { // ...se não conseguir pegue o erro
        console.err(e);
    }



}


module.exports = {
    home,
    getAll,
    getAllGhibliMovies
};