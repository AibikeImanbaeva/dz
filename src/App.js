import React from "react";
import MainRoutes from "./MainRoutes";
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
 <>
         <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>


 </>
  );
}

export default App;
