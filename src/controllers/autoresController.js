import autores from "../models/Autor.js";
//Requisições HTTP aqui

class AutoresController{

    static listarAutores = (req, res) =>{
        autores.find((err, autores) =>{
            res.status(200).json(autores)  
        })
    }

    static cadastrarAutores = (req, res) =>{
        let autor = new autores(req.body);
        autor.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:'Autor atualizado com sucesso.'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarAutoresPorID = (req, res) =>{
        const id = req.params.id;

        autores.findById(id, (err, autores) =>{
            if(err){
                res.status(400).send({message: `${err.message}-Id do erro não localizado!`})
            }else{
                res.status(200).send(autores);
            }
        })
    }
    static excluirAutores = (req, res) =>{
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Autores removido com sucesso.'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutoresController;