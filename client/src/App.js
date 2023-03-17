import Head from './components/Head';
import Head2 from './components/Main/Home/Head2';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Head2 />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
