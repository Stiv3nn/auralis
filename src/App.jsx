import './App.css';
import { FaEarListen } from 'react-icons/fa6';

function App() {

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
            <input type="search" placeholder='inserisci URL...' className='input-search' />

            <div className='btn'>
              <button type="submit" className='carica'>Mp3</button>
              <button type="submit" className='mp3'>Carica</button>
            </div>

            <div className='nota-guida'>
              <span>Incolla il link e lascia che Auralis faccia il resto</span>
            </div>
          </div>

          {/* FINESTRA DESTRSA */}
          <div className='hero-content-dx'>
            <span className='text-dx'>Ogni canzone racconta una storia, e ora puoi portarla sempre con te. <br /> Basta un link, un click e la musica è tua.</span>
            <h1 className='title-dx'>AURALIS</h1>
          </div>

        </main>



      </div>
    </>
  )
}

export default App;
