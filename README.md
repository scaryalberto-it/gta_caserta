# Caserta Open World — WebGL Alpha 0.3

Prototipo 3D con Three.js WebGL, ambiente stilizzato ispirato al centro di Caserta, Reggia semplificata, edifici, strade, marciapiedi, attraversamenti, alberi, lampioni, 40 pedoni e 12 auto ambientali.

## Avvio

Pubblicare su HTTPS (GitHub Pages) oppure avviare un server locale con `python -m http.server 8000`. Richiede WebGL e connessione iniziale per caricare Three.js da esm.sh. Il service worker memorizza i file locali; **l'uso offline completo non è garantito** senza rendere locale anche la libreria Three.js.

## Controlli

Smartphone: frecce a sinistra, AUTO/VISTA/CORRI a destra. PC: WASD o frecce, E auto, Q telecamera, Shift corsa.

## Limiti

Mappa interpretativa, non cartograficamente accurata; pedoni e auto seguono traiettorie semplici; collisioni, fisica, traffico intelligente e animazioni scheletriche sono ancora da realizzare. Nessun test su dispositivo reale effettuato in questa sessione.
