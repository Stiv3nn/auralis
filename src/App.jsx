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

          <div className='hero-content'>
            <span className='text1'>Dal web al tuo player</span>
            <span className='text2'>Converti e Scarica i tuoi brani in pochi secondi</span><br />
            <span className='text3'><em>Ascolta oltre il limite</em></span>
          </div>

        </main>














      </div>
    </>
  )
}

export default App;
