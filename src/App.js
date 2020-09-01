import React from 'react';
import { AppRouter } from './routers/router';
import { Footer } from './components/footer';
// import Change from './components/Change';


function App() {
  return (
    <div className="App">
    
    <AppRouter />
    {/* <Change /> */}
    <Footer />
   
    </div>
  );
}

export default App;
