# 1. Usa l'immagine base ufficiale di Python
FROM python:3.11-slim

# 2. Installa FFmpeg nel sistema operativo del container
RUN apt-get update && apt-get install -y ffmpeg && rm -rf /var/lib/apt/lists/*

# 3. Imposta la cartella di lavoro all'interno del container
WORKDIR /app

# 4. Copia il file delle dipendenze e installale
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copia tutto il resto del codice del backend
COPY . .

# 6. Esponi la porta 5000 (dove gira Flask)
EXPOSE 5000

# 7. Comando per avviare il server Flask
CMD ["python", "server.py"]