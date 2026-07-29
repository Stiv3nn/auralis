import { useState } from 'react';
import './App.css';
import { FaEarListen } from 'react-icons/fa6';
import TextMorph from './components/TextMorph';

function App() {

  // Definire la lista di parole per l'effetto morphing
  const mieParole = "AURALIS, SOUND, ACOUSTIC, MUSIC";

  // Stato per l'input URL e per lo stato di caricamento
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState('false');

  // Funzione per chiamare il backend ed eseguire il download
  const handleDownload = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Inserisci un URL valido di YouTube!");
      return;
    }

    setLoading(true);

    try {
      // Inviamo l'URL in formato JSON al server Flask sulla porta 5000
      const response = await fetch('http://localhost:5000/api/donwload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });

      if (!response.ok) {
        throw new Error('Errore durante il download del brano.');
      }

      // Riceviamo il file MP3 dal server sotto forma di Blob (binary large object)
      const blob = await response.blob();

      // Creiamo un URL temporaneo per il file ricevuto
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'brano_auralis.mp3'; // Nome predefinito del file scaricato
      document.body.appendChild(link);
      link.click();

      // Pulizia dopo il download
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);

    } catch (error) {
      console.log(error);
      alert("Si è verificato un errore durante la conversazione.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id='container'>

        {/* Intestazione */}
        <header>
          <h1 className='title-header'> <FaEarListen size={15} /> AURALIS</h1>
        </header>

        {/* Parte principale */}
        <main>

          {/* -- FINESTRA SINISTRA -- */}

          <div className='hero-content'>
            <span className='text1'>Dal web al tuo player</span>
            <span className='text2'>Converti e Scarica i tuoi brani in pochi secondi</span><br />
            <span className='text3'><em>Ascolta oltre il limite</em></span>
          </div>

          {/* INPUT SEARCH */}
          <div className='container-input'>

            {/* Collegare l'input allo stato url con onChange e value */}
            <input
              type="search"
              placeholder='inserisci URL...'
              className='input-search'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <div className='btn'>
              {/* I BTN carica/mp3 ora invocano handleDownload */}
              <button
                type="button"
                className='carica'
                onClick={handleDownload}
                disabled={loading}
              >
                {loading ? "Conversione..." : "Mp3"}
              </button>

              <button
                type="button"
                className='mp3'
                onClick={handleDownload}
                disabled={loading}
              >
                {loading ? "Attendi..." : "Carica"}
              </button>
            </div>

            <div className='nota-guida'>
              <span>Incolla il link e lascia che Auralis faccia il resto</span>
            </div>
          </div>

          {/* FINESTRA DESTRSA */}
          <div className='hero-content-dx'>
            <span className='text-dx'>Ogni canzone racconta una storia, e ora puoi portarla sempre con te. <br /> Basta un link, un click e la musica è tua.</span>
            <h1 className='title-dx'><TextMorph words={mieParole} interval={2500} /></h1>
          </div>
        </main>

        {/* FOOTER */}
        <footer>
          <div className="footer-content">
            <p>© 2026 <strong>AURALIS</strong> - Educational & Portfolio Project Only. </p>
            <p className='disclaimer'>Sviluppato esclusivamente a scopo didattico. <span className="seconda-frase">Nessun intento di violazione del copyright.</span></p>
          </div>
        </footer>



      </div>
    </>
  )
}

export default App;
