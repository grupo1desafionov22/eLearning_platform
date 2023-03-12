import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
