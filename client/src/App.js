import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import AdminHead from './components/AdminHead';
import Head2 from './components/Main/Home/Head2';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminHead />} />
          <Route path="/*" element={<>
            <Head />
            <Head2 />
          </>} />
        </Routes>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
