# MongoDB Post Management CLI
## v.1.0.0
### testing...

Una CLI per gestire i post in un database MongoDB utilizzando Node.js, TypeScript e Commander.js.


### Requisiti

* Node.js versione 16 o superiore
* MongoDB Atlas o un'istanza locale di MongoDB configurata
* Una connessione funzionante al database MongoDB 
* (specificare la stringa di *connessione nel file .env)

### Configurazione

1.Clona repository: 

``` 
git clone <url-del-tuo-repository>

cd <nome-cartella-repository>

```

2.Installa le dipendenze:

```
npm install 

```

3.Configurare il file .env

## Comandi Disponibili

### Avviare la CLI

se hai usato lo script classico npm start puoi usare :
```
npm start -- <comando> [opzioni]

```

###  Aggiungi un nuovo post

```
npm start -- get-posts

```

Risultato: visualizza tutti i post e li stampa in console.

###  Aggiungi un nuovo post

```
npm start -- add-post -t <titolo> -c <contenuto>

```

###  Aggiorna un post

```
npm start -- update-post -i <id> -t <titolo> -c <contenuto>

```

###  Elimina un post

```
npm start -- delete-post -i <id>

```
