# Caserta Open World — WebGL Alpha 0.4

Gioco browser mobile/PWA con Three.js. **Mappa stilizzata ispirata a Caserta, non ancora geograficamente fedele.**

## Novità
- Reggia ricostruita con facciata articolata in `palace.js`: 3 corpi in rilievo, cornici, portali, finestre, balconi e piazzale con giardini.
- Personaggi low-poly con geometrie anatomiche anziché soli parallelepipedi.
- 40 pedoni, 12 auto ambientali, strade, lampioni, alberi, missioni e automobile guidabile.
- D-pad touch a sinistra e pulsanti AUTO/VISTA/CORRI a destra.
- Service worker network-first per evitare di mostrare versioni obsolete.

## Avvio
Da terminale nella cartella: `python -m http.server 8000` e apri `http://localhost:8000`. In alternativa abilita GitHub Pages per il branch `main`. La libreria Three.js viene caricata da esm.sh: serve rete al primo accesso e **non è garantito il funzionamento offline completo**.

## Limiti attuali
Non è un GTA completo. Non ci sono ancora collisioni fisiche, intelligenza artificiale avanzata, modelli fotografici, animazioni scheletriche, guida realistica o cartografia esatta. I pedoni e il traffico usano traiettorie semplici. Non è stato effettuato un test grafico su smartphone reale in questa sessione.
