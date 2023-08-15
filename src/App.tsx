import './App.css'
import usePensador from './hooks/usePensador';

function App() {

  const [pensador] = usePensador();


  return (
    <>
      <div className='frase_content'>
        {!pensador.loading && pensador.frase}
      </div>
      <div className='frase_author'>
        {!pensador.loading && pensador.autor}
      </div>
      <button className='frase_button' onClick={()=>pensador.getFrase()}>
      {!pensador.loading ?  "Nova frase" : "Pensando..."}
      </button>
      <footer>
        <a target="_blank" rel="nofollow" title="Creditos API" href='https://pensador-promise.vercel.app/'>
          🧩 API
        </a>
        <a target="_blank" rel="nofollow" title="Pensador" href='https://www.pensador.com/'>
          💭 Pensador
        </a>
        <a target="_blank" rel="nofollow" title="Github" href='https://github.com/delkz'>
          ☕ Github
        </a>
      </footer>
    </>
  )
}

export default App
