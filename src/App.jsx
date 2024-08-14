import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.6435-9/66451229_1589862197815053_5622925137578819584_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeF5ZnWL4c6hcHAfM-LImbLXV5tVscHX6S9Xm1WxwdfpL7pZbIlrIGtGaxRY482BiMvd1SWL6JfXfUJUSU_jctrt&_nc_ohc=ZhhrRlPJBdkQ7kNvgETmxFG&_nc_ht=scontent.fbkk2-8.fna&oh=00_AYCTssKD8nYwgyNb1Lg1f5-YmngTSKWIBS-VEG6poiE9Lw&oe=66E44C8C" alt="image dek jewwwwww" />
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sawaddy jaaaaaaaaa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
