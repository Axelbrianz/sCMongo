import mongoose from "mongoose";


// Definizione dello schema di un post
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Creazione del modello
export const Post = mongoose.model('Post', postSchema);
