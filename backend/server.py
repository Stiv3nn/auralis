import os
import tempfile
from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import yt_dlp

# Inizializziamo l'applicazione Flask e abilitiamo CORS (per permettere a React su localhost di comunicare)
app = Flask(__name__)
CORS(app, expose_headers = ["Content-Disposition"])

@app.route('/api/download', methods=['POST'])
def download_audio():
    # 1. Recuperiamo i dati inviati da React in formato JSON
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({'error': 'URL non fornito'}), 400

    # 2. Creiamo una cartella temporanea per non intasare il sistema con file vecchi
    temp_dir = tempfile.mkdtemp()

    # 3. Impostiamo le opzioni di yt-dlp
    opzioni = {
        'format': 'bestaudio/best',
        # 'ffmpeg_location': r'G:\Altri computer/Il mio laptop\Downloads/ffmpeg-8.1-essentials_build/ffmpeg-8.1-essentials_build/bin' ,
        'writemetadata': True,
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        # Salviamo il file scaricato nella cartella temporanea
        'outtmpl': os.path.join(temp_dir, '%(title)s.%(ext)s'),
        'quiet': True  # Riduce il log in console
    }

    try:
        with yt_dlp.YoutubeDL(opzioni) as ydl:
            # Estraiamo le informazioni senza scaricare subito per scoprire il titolo esatto del file
            info = ydl.extract_info(url, download=True)
            # Ricaviamo il percorso effettivo del file MP3 generato
            filename = ydl.prepare_filename(info)
            base, _ = os.path.splitext(filename)
            mp3_filepath = f"{base}.mp3"

        # 4. Inviamo il file MP3 direttamente al browser dell'utente come download
        return send_file(
            mp3_filepath,
            as_attachment=True,
            download_name=os.path.basename(mp3_filepath)
        )

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Avviamo il server in locale sulla porta 5000
    app.run(host='0.0.0.0', port=5000, debug=True)