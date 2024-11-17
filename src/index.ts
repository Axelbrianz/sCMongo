import { connectDB, getPosts, addPost, updatePost, deletePost } from './db';
import { config } from "dotenv";
import mongoose from 'mongoose';
import { Command } from 'commander';
config();
// Avvia la connessione al database
//const test = async () => {
//    try {
//        // Connetti al database
//        await connectDB();

//        // Tutti i post
//        const posts = await getPosts();
//        console.log("Post recuperati:", posts);


//        // Aggiunge un nuovo post
//        await addPost("Esempio Titolo", "Esempio Contenuto");


//        //Aggiorna un post
//        await updatePost("6739fe2523f24a08e0e8b5cf", "Titolo Aggiornato", "Contenuto Aggiornato");



//        // Elimina un post

//        await deletePost("673a12b40988b35109f60c1b");

//    }
//    catch (error) {
//        console.error("Errore:", error);
//    } finally {
//        // Disconnetti dal database
//        await mongoose.disconnect();
//        console.log("Connessione chiusa");
//    }
//};
//
//// Esegui la funzione principale
//test();

const program = new Command()

program
    .name("testCLI")
    .description("CLI di test per gestire dei post in MongoDB")
    .version("1.0.0");

// Comando: Connetti al database

program
    .command("get-posts")
    .description("Recupera tutti i post dal database")
    .action(async () => {
        await connectDB();
        await getPosts();
        await mongoose.disconnect();
    });

// Comando: Aggiungi un nuovo post
program
    .command("add-post")
    .description("Aggiunge un nuovo post al database")
    .requiredOption("-t, --title <string>", "Titolo del post")
    .requiredOption("-c, --content <string>", "Contenuto del post")
    .action(async (options) => {
        await connectDB();
        await addPost(options.title, options.content);
        await mongoose.disconnect();
    });

// Comando: Aggiorna un post
program
    .command("update-post")
    .description("Aggiorna un post esistente")
    .requiredOption("-i, --id <string>", "ID del post")
    .requiredOption("-t, --title <string>", "Nuovo titolo del post")
    .requiredOption("-c, --content <string>", "Nuovo contenuto del post")
    .action(async (options) => {
        await connectDB();
        await updatePost(options.id, options.title, options.content);
        await mongoose.disconnect();
    });

// Comando: Elimina un post
program
    .command("delete-post")
    .description("Elimina un post dal database")
    .requiredOption("-i, --id <string>", "ID del post da eliminare")
    .action(async (options) => {
        await connectDB();
        await deletePost(options.id);
        await mongoose.disconnect();
    });

// Esegui i comandi definiti
program.parse(process.argv);







