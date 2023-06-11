//  import Detaljevisning from './pages/Detaljevisning'
// import Home from './pages/Home'
// import Listevisning from './pages/Listevisning'
// import './App.css'
// import { BrowserRouter as Router, Route, createRoutesFromElements } from 'react-router-dom';

// function App() {

//   return (

//      <div className="app">
// <Router>
//      <Routes>
//         <Route exact path="/" component={Home} />
//         <Route path="/Listevisning" component={Listevisning} />
//         <Route path="/Detaljevisning" component={Detaljevisning} />
//         </Routes>

//     </Router>
//      </div>
//   )
// }

// export default App

// import "./App.css"
// import { Outlet } from "react-router-dom";

// function App() {
//   return (

//     <div className="App">
//       <Outlet/>

//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { AnimalProvider } from "./AnimalContext";

function App() {
  const [context, setContext] = useState({});

  return (
    <>
      <AnimalProvider>
        {/* <AuthContext.Provider value={auth}> */}
        <Outlet context={[context, setContext]} />
        {/* </AuthContext.Provider> */}
      </AnimalProvider>
    </>
  );
}


export default App;
