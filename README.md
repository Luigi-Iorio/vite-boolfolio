# Vite Portfolio

_Questa repo è la seconda parte del progetto **Boolfolio**, quì viene gestito il front-end della pagina web per la gestione dei progetti._

### Descrizione

Questo front-end è costruito utilizzando Vue 3 con Vite e comunica con il [back-end Laravel](https://github.com/Luigi-Iorio/laravel-api.git) tramite chiamate API per visualizzare e gestire i progetti.

### Funzionalità implementate

- **Chiamata Api**: Nel componente `AppMain.vue` della pagina web viene eseguita una chiamata API all'endpoint fornito dal back-end Laravel per recuperare tutti i progetti.

- **Visualizzazione Progetti**: È stato utilizzato il componente `MainCard.vue` per visualizzare i progetti ricevuti tramite API in forma di card.

- **Gestione Pagine**: Sono state implementate delle chiamate Api per la paginazione dei progetti. La paginazione è gestita attraverso i due bottoni a fondo pagina (Pag. Precedente / Pag. Successiva).

- **Vue Router**: Aggiunta la gestione delle rotte utilizzando Vue Router.

  - **Creazione Rotte**: Definito il file `router.js` per la creazione delle rotte.

  - **Creazione Pagine**: Sono state create le pagine per la home, l'elenco dei progetti e la visualizzazione dei dettagli del progetto.

  - **Navigazione tra le Pagine**: Implementata la navigazione tra le pagine, incluso il passaggio dei parametri per la visualizzazione dei dettagli del progetto.

- **Campo di Ricerca**: È stato aggiunto un campo di ricerca per filtrare i progetti per titolo. All'invio dell'input viene inviata una specifica chiamata Api passando un parametro `key`, in questo modo la logica di ricerca verrà eseguita lato back-end.

- **Validazione**: Sono stati rappresentati con un alert di Bootstrap gli errori di validazione ottenuti dal back-end.
