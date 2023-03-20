import React, { useEffect, useState } from "react";

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter} from 'react-router-dom';

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
 
        <Head />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
