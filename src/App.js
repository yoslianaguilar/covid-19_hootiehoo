import React from 'react';
import './App.css';
import { AppRouter } from './routers/router';
import { Footer } from './components/footer';



function App() {
  return (
    <div className="App">

    <AppRouter />
    <Footer />
    </div>
  );
}

export default App;
