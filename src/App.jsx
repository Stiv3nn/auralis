import { useState } from 'react';
import './App.css';
import { FaEarListen } from 'react-icons/fa6';
import TextMorph from './components/TextMorph';

function App() {

  // Definire la lista di parole per l'effetto morphing
  const mieParole = "AURALIS, SOUND, ACOUSTIC, MUSIC";

  // Stato per l'input URL e per lo stato di caricamento (corretto da 'false' stringa a false booleano)
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  // Funzione per chiamare il backend ed eseguire il download
  const handleDownload = async (e) => {
    e.preventDefault();

    if (!url || !url.trim()) {
      alert("Inserisci un URL valido di YouTube!");
      return;
    }

    setLoading(true);

    try {
      // Corretto il refuso nell'URL: da 'donwload' a 'download'
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) {
        throw new Error('Errore durante il download del brano.');
      }

      // Estraiamo il nome del file dall'header 'Content-Disposition' inviato dal server
      const disposition = response.headers.get('Content-Disposition');
      let fileName = 'brano_auralis.mp3'; // Nome di fallback se non trova il titolo

      if (disposition && disposition.includes('filename=')) {
        // Estrae la stringa tra virgolette o dopo '='
        const matches = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (matches && matches[1]) {
          fileName = matches[1].replace(/['"]/g, '');
        }
      }

      // Riceviamo il file MP3 dal server sotto forma di Blob (binary large object)
      const blob = await response.blob();

      // Creiamo un URL temporaneo per il file ricevuto
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName; // Nome predefinito del file scaricato
      document.body.appendChild(link);
      link.click();

      // Pulizia dopo il download
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
      setUrl('');
      // Svuota il campo di testo

    } catch (error) {
      console.log(error);
      alert("Si è verificato un errore durante la conversione.");
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

          {/* INPUT SEARCH - Avvolto nel tag form per gestire sia il click che il tasto Invio */}
          <form onSubmit={handleDownload} className='container-input'>

            <div className="search-box">

              {/* Collegare l'input allo stato url con onChange e value */}
              <input
                type="text"
                placeholder='Incolla il link di YouTube...'
                className='input-search'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />


              {/* Impostati su type="submit" per collegarli correttamente alla funzione handleDownload */}
              <button
                type="submit"
                className='btn-convert'
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  "Scarica MP3"
                )}
              </button>

            </div>

            <div className='nota-guida'>
              <span>Incolla il link e lascia che Auralis faccia il resto</span>
            </div>
          </form>

          {/* FINESTRA DESTRA */}
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