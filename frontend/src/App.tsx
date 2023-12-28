import api from './api';
import Header from './components/Header';
import './App.css'

function App() {
  const handleClick = async () => {
    const data: string = await api.get('/scoreboard');
    console.log('data', data);
  };

  return (
    <>
      <Header />
      <div>
        <h1>testing</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
