<div align="center">

  # 👂AURALIS
  
  **Dal web al tuo player. Converti e scarica i tuoi brani in pochi secondi.**

  ![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
  ![Python](https://img.shields.io/badge/Backend-Flask-000000?style=for-the-badge&logo=flask)
  ![Nginx](https://img.shields.io/badge/Proxy-Nginx-009639?style=for-the-badge&logo=nginx)
  ![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker)
  ![yt-dlp](https://img.shields.io/badge/Engine-yt--dlp-red?style=for-the-badge)
  ![FFmpeg](https://img.shields.io/badge/Audio-FFmpeg-0078D7?style=for-the-badge&logo=ffmpeg)

</div>

---

## Cos'è Auralis?

**AURALIS** è una web app moderna e minimale progettata per trasformare in modo fluido i link di YouTube in file audio **MP3**. 

L'interfaccia focalizza l'attenzione dell'utente su un'esperienza di ricerca elegante e intuitiva.

---

## Features Principali

- ⚡ **Conversione Rapida**: Estrazione istantanea del flusso audio grazie all'integrazione con `yt-dlp` e `FFmpeg`.
- 🐳 **Architettura Containerizzata**: Deploy multi-container tramite Docker e orchestration via `docker-compose`.
- 🔄 **Nginx Reverse Proxy**: Gestione unificata del traffico web e reindirizzamento trasparente delle chiamate API `/api/`.
- 🌐 **Supporto Ngrok**: Esposizione remota e testing in tunnel senza configurazioni complesse o problemi di CORS.
- 🏷️ **Titoli Dinamici**: Riconoscimento ed estrazione automatica del titolo originale del brano da YouTube tramite header `Content-Disposition`.
- 🎨 **Interfaccia Glassmorphic**: UI moderna realizzata con React, input unificato e micro-interazioni fluide.
- 🔀 **Text Morphing**: Componente dinamico per l'effetto tipografico in tempo reale.
- 🧹 **Gestione Memoria & Cleanup**: Gestione automatica dei file temporanei lato server e pulizia delle risorse BLOB nel browser.

---

## 🛠️ Tech Stack

### **Frontend**
- **React (Vite)** – Struttura reattiva.
- **Nginx** – Web server di produzione e Reverse Proxy.
- **CSS3 / Glassmorphism** – Styling personalizzato senza dipendere da framework UI pesanti.
- **React Icons** – Iconografia essenziale e pulita.

### **Backend**
- **Python & Flask** – REST API per l'elaborazione delle richieste POST.
- **Flask-CORS** – Gestione della comunicazione cross-origin sicura tra client e server.
- **yt-dlp & FFmpeg** – Pipeline backend per l'estrazione delle tracce audio e conversione codificata in MP3.

### **DevOps & Tooling**
- **Docker & Docker Compose** – Containerizzazione multi-stage per ambienti di sviluppo e produzione.
- **ngrok** – Tunneling sicuro per la condivisione temporanea dell'ambiente locale sul web.

---

## 📖 Come Funziona l'Infrastruttura

AURALIS utilizza un'architettura a microservizi orchestrata con Docker:
1. **Nginx (Frontend)** riceve tutte le richieste HTTP sulla porta `80`.
2. Se la richiesta riguarda la grafica dell'app, Nginx serve i file statici compilati di React.
3. Se la richiesta è indirizzata a `/api/download`, Nginx fa da **Reverse Proxy** e la inoltra internamente al container del **Backend Flask** (`http://backend:5000/api/download`).
4. **Flask** riceve l'URL YouTube, scarica l'audio tramite `yt-dlp`, lo converte in MP3 tramite `FFmpeg` e restituisce il file direttamente al browser.

---

## 🚀 Guida all'Installazione e Uso

### Prerequisiti
- **Docker** e **Docker Desktop** installati ed attivi sul sistema.
- **Git** per la clonazione della repository.
- *(Opzionale)* **ngrok** per condividere l'app all'esterno.

---

### METODO 1: Avvio con Docker Compose (Consigliato)

È il metodo più semplice e non richiede l'installazione manuale di Python, Node.js o FFmpeg sul tuo sistema operativo.

#### 1. Clonare la repository
```bash
git clone https://github.com/Stiv3nn/auralis.git
cd auralis
```

---

## ⚖️ Disclaimer Legale & Scopo del Progetto

> **Educational & Portfolio Project Only**
> 
> **AURALIS** è stato sviluppato **esclusivamente a scopo didattico e dimostrativo** per l'esplorazione dell'integrazione full-stack tra **React** e **Flask**, la manipolazione di flussi di dati binari (Blob/Stream) e la gestione dei microservizi di conversione multimediale.
>
> Non vi è alcun intento di violazione del copyright. L'autore non incentiva né supporta il download non autorizzato di materiale protetto da diritto d'autore. L'utilizzo di questa applicazione è inteso unicamente per contenuti di pubblico dominio o dei quali si detengono i diritti.

---

<div align="center">
  <sub>Sviluppato da <strong>Stiven Hoxha</strong> · 2026</sub>
</div>