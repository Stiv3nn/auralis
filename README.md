<div align="center">

  # 👂AURALIS
  
  **Dal web al tuo player. Converti e scarica i tuoi brani in pochi secondi.**

  ![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
  ![Python](https://img.shields.io/badge/Backend-Flask-000000?style=for-the-badge&logo=flask)
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
- 🏷️ **Titoli Dinamici**: Riconoscimento ed estrazione automatica del titolo originale del brano da YouTube tramite header `Content-Disposition`.
- 🎨 **Interfaccia Glassmorphic**: UI moderna realizzata con React, input unificato e micro-interazioni fluide.
- 🔀 **Text Morphing**: Componente dinamico per l'effetto tipografico in tempo reale.
- 🧹 **Gestione Memoria & Cleanup**: Gestione automatica dei file temporanei lato server e pulizia delle risorse BLOB nel browser.

---

## 🛠️ Tech Stack

### **Frontend**
- **React (Vite)** – Struttura reattiva.
- **CSS3 / Glassmorphism** – Styling personalizzato senza dipendere da framework UI pesanti.
- **React Icons** – Iconografia essenziale e pulita.

### **Backend**
- **Python & Flask** – REST API per l'elaborazione delle richieste POST.
- **Flask-CORS** – Gestione della comunicazione cross-origin sicura tra client e server.
- **yt-dlp & FFmpeg** – Pipeline backend per l'estrazione delle tracce audio e conversione codificata in MP3.

---

## 🚀 Guida all'Installazione Locale

### 1. Clonare il repository
```bash
git clone https://github.com/Stiv3nn/auralis.git
cd auralis
```

### 2. Configurare il Backend (Flask)
```bash
cd backend
pip install flask flask-cors yt-dlp
# Assicurati di avere FFmpeg installato nel tuo sistema
python server.py
```

### 3. Configurare il Frontend (React)
```bash
cd ../frontend
npm install
npm run dev
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
  <sub>Sviluppato con passione da <strong>Stiven Hoxha</strong> · 2026</sub>
</div>