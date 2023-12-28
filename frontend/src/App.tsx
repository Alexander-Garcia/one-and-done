import api from './api';
import Header from './components/Header';

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
      <div>
        <button onClick={handleClick}>
          count is
        </button>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
