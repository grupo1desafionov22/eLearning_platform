<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> develop

import Head from './components/Head';
import AdminHead from './components/AdminHead';
import Head2 from './components/Main/Home/Head2';
import Main from './components/Main';
import Footer from './components/Footer';
<<<<<<< HEAD
import { BrowserRouter} from 'react-router-dom';
=======
>>>>>>> develop

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
 
        <Head />
=======
        <Routes>
          <Route path="/admin/*" element={<AdminHead />} />
          <Route path="/*" element={<>
            <Head />
            <Head2 />
          </>} />
        </Routes>
>>>>>>> develop
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
