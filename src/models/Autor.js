import mongoose from "mongoose";

const autoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, require: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autoSchema)
export default autores;