# VibeLabz

Sito di [vibelabz.simonerecchia.com](https://vibelabz.simonerecchia.com): la pagina sviluppatore per le app VibeLabz su Google Play, con privacy policy condivisa da tutte le app.

Sito statico (HTML + CSS, nessun build), bilingue italiano/inglese, ospitato su GitHub Pages.

## Struttura

```
index.html          Home: presentazione, app, chi sono, contatti
privacy/index.html  Privacy policy (IT + EN) valida per tutte le app
404.html            Pagina "non trovata"
assets/             CSS, JS del selettore lingua, logo
CNAME               Dominio personalizzato per GitHub Pages
```

La lingua si sceglie in automatico dal browser, con il selettore IT/EN o con `?lang=it` / `?lang=en` nell'URL.

## URL da usare in Play Console

| Campo | URL |
| --- | --- |
| Sito web (account sviluppatore / scheda app) | `https://vibelabz.simonerecchia.com` |
| Privacy policy (obbligatoria per ogni app) | `https://vibelabz.simonerecchia.com/privacy/` |
| Cancellazione dati (se richiesto) | `https://vibelabz.simonerecchia.com/privacy/#en-data-deletion` |

## Pubblicazione

1. **GitHub Pages**: nel repo, *Settings → Pages → Build and deployment*: *Source* = **Deploy from a branch**, scegli il branch e la cartella **/ (root)**.
2. **DNS**: dal provider del dominio `simonerecchia.com` aggiungi un record **CNAME** con nome `vibelabz` e valore `simonerecchia.github.io`.
3. Torna in *Settings → Pages*: il dominio `vibelabz.simonerecchia.com` viene letto dal file `CNAME`. Quando il controllo DNS è verde, attiva **Enforce HTTPS**.

## Aggiungere una nuova app

1. In `index.html`, sezione `#apps`: copia il blocco di esempio commentato, compila nome, descrizione, icona e link Google Play, poi rimuovi la card "In laboratorio".
2. In `privacy/index.html`, sezione 12 (*Note specifiche per app*): aggiungi una riga alla tabella, sia nella versione italiana sia in quella inglese, con permessi e servizi di terze parti usati dall'app. Aggiorna la data "Ultimo aggiornamento".
3. Se l'app usa pubblicità, analytics, crash reporting o account, aggiorna anche le sezioni relative della privacy policy.

## Anteprima locale

```sh
python3 -m http.server 8000
```

Poi apri <http://localhost:8000>.
