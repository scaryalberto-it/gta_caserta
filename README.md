# Caserta Open World — Alpha 0.2

Prototipo **giocabile**, 3D stilizzato realizzato con proiezione prospettica su Canvas 2D, senza dipendenze esterne. La mappa è **inventata e semplificata**, con strade secondarie e pedoni, non una riproduzione cartografica fedele di Caserta.

## Avvio

1. Nella cartella del progetto avvia `python -m http.server 8000` (oppure `py -m http.server 8000` su Windows).
2. Apri `http://localhost:8000` nel browser.
3. Per provarlo su telefono, pubblica la cartella su un hosting HTTPS statico (es. GitHub Pages o Netlify), poi apri l'URL sul telefono.
4. Da Chrome Android: menu > **Aggiungi a schermata Home / Installa app**. Su Safari iOS: Condividi > **Aggiungi alla schermata Home**.

La PWA usa un service worker per conservare tutti i file in cache. Il primo accesso richiede una connessione, poi è disponibile offline (salvo restrizioni del browser).

## Comandi

- Smartphone: quattro frecce direzionali a sinistra; AUTO per entrare/uscire dall'auto gialla; CORRI tenuto premuto; VISTA per ruotare la telecamera.
- PC: WASD o frecce per camminare; E per auto; Shift per correre; Q per ruotare la visuale.

## Gameplay

Tre missioni a rotazione: Piazza Vanvitelli, Corso Trieste e Reggia. Avvicinati alla colonna gialla per completare la missione. Il denaro e l'indice della missione sono salvati in localStorage.

## Limiti dichiarati

Questa è una **vertical slice dimostrativa**: la prospettiva è simulata in Canvas (non WebGL), la macchina si guida con un modello arcade basilare, la mappa è stilizzata e sono presenti pedoni e traffico ambientale semplificati, ma non ancora combattimento, collisioni complete o salvataggio della posizione. È una base offline e leggera per un successivo upgrade a un vero motore 3D (Three.js/Babylon.js).
