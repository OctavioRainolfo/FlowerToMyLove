import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import flor from './assets/flor1.png'
import tulipa from './assets/tulipa.jpg'
import florAzul from './assets/blue.jpeg'
import alert from './assets/alertr.jpg'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [isClickedAzul, setClickedAzul] = useState(false)
  const [isClickedBranco, setIsClickedBranco] = useState(false)
  const [isClickedRosa, setIsClickedRosa] = useState(false)


  return (
    <div className="App">
      {!isClickedAzul && !isClickedBranco && !isClickedRosa ? (
        <>
          {!isClicked && (
            <>
              <p>Você recebeu uma e-flor!!!</p>
              <img src={alert} />
              <button onClick={setIsClicked}>
                Clique aqui para aceita-lá
              </button>
            </>
          )}
          {isClicked && (
            <>
              <p>
                Selecione a cor da flor:
              </p>
              <div className='buttonsBloem'>
                <button onClick={setClickedAzul}>
                  Azul
                </button>
                <button onClick={setIsClickedBranco}>
                  Branco
                </button>
                <button onClick={setIsClickedRosa}>
                  Rosa
                </button>
              </div>
            </>
          )}
        </>

      ) : (

        <>
          {isClickedAzul && (
            <div className={`flower ${isClickedAzul ? 'show' : ''}`}>
              <p>
                Baby you light up my world like nobody else.
              </p>
              <p>
                ❤
              </p>
              <p>
                Every morning, I wake up with a burning desire to build a beautiful life alongside you, pushing myself to be better, all because of you.
              </p>
              <img src={florAzul} />
            </div>
          )}

          {isClickedBranco && (
            <div className={`flower ${isClickedBranco ? 'show' : ''}`}>
              <p>
                Finding you was so hard, but loving you is easy.
              </p>
              <p>
                ❤
              </p>
              <p> Love you so much, kuruminha.</p>
              <img src={flor} />
            </div>
          )}

          {isClickedRosa && (
            <div className={`flower ${isClickedRosa ? 'show' : ''}`}>
              <p>
              I Would be the happiest person alive if I could spend the rest of my life by your side.
              </p>
              <p>
                ❤
              </p>
              <p>Would you visite the tulip fields with me?</p>
              <img src={tulipa} />
            </div>
          )}

        </>
      )}

    </div>
  )
}

export default App
