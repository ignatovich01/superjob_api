import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Loader } from '@mantine/core';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  if (loading) {
    return <Loader size="xl" variant="dots" className="loader" />;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppRouter />
        </MantineProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
