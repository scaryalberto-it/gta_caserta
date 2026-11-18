# Caserta Open World — WebGL Alpha 0.5

Prototipo open-world stilizzato in Three.js. La mappa è **inventata e semplificata**: non è una ricostruzione geografica esatta di Caserta.

## Funzionalità

- Reggia procedurale più dettagliata (`palace.js`), piazzale, giardini e facciata monumentale.
- Personaggi low-poly con teste, braccia, gambe e simulazione base della camminata.
- Automobili con carrozzeria, vetri, ruote cilindriche, fari e paraurti.
- 40 pedoni e 12 veicoli in movimento lungo traiettorie semplici.
- Collisioni rettangolari con edifici e facciata della Reggia per il giocatore e l'auto.
- Strade, marciapiedi, attraversamenti, lampioni, alberi e missioni.
- Controlli mobile con quattro frecce a sinistra e azioni a destra.
- Ottimizzazione mobile di risoluzione, ombre e visibilità dei personaggi.

## Esecuzione

Avvia `python -m http.server 8000` e apri `http://localhost:8000`, oppure pubblica con GitHub Pages. È necessaria una connessione per il caricamento iniziale di Three.js da esm.sh. La PWA non garantisce ancora l'offline completo.

## Limiti e lavoro successivo

Non è ancora un gioco GTA completo. Mancano una rete stradale reale, asset professionali, animazioni scheletriche, guida con fisica, traffico intelligente, interazioni con NPC e test di performance su dispositivi reali. La collisione è semplificata. Le modifiche sono state pubblicate ma non collaudate su smartphone in questa sessione.
