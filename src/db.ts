import mongoose from 'mongoose';
import { Post } from './model/model';



// Funzione per connettersi a MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "postTest" })
        console.log('Connesso a MongoDB');
    } catch (error) {
        console.error('Errore di connessione a MongoDB:', error); //console.error è come il console.log ma specifico per gli errori.
        process.exit(1); // Termina il processo in caso di errore. 1 è il codice di terminazione del processo a causa di un errore. Default/omissione = (0)
    }
};

// Ottenere tutti i post
export const getPosts = async () => {
    try {
        const posts = await Post.find();
        console.log('Elenco dei post:', posts);
        return posts;
    }
    catch (error) {
        console.error("Errore nel recupero dei post", error);
    }


};

// Aggiungere un post
export const addPost = async (title: string, content: string) => {
    try {
        const post = new Post({ title, content });
        const savedPost = await post.save();
        console.log('Nuovo post creato:', savedPost);
        return savedPost;
    }
    catch (error) {
        console.error("Errore nell'aggiunta del nuovo post", error);
    }



};

// Aggiornare un post
export const updatePost = async (id: string, title: string, content: string) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true }); //new : true, restituisce l'oggetto gia aggiornato.
        console.log('Post aggiornato:', updatedPost);
        return updatedPost;
    }
    catch (error) {
        console.error("Errore aggiornamento post", error);
    }



};

//rimuovere un post
export const deletePost = async (id: string) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        console.log('Post eliminato:', deletedPost);
        return deletedPost;
    }
    catch (error) {
        console.error("Errore eliminazione post", error);
    }


};

