import { useEffect, useReducer,useRef,useState } from "react";
import { Routes,Route } from "react-router-dom";
import { MyContext } from "./Context.jsx";
import EditorForm from './components/EditorForm';
import CVPreview from './components/CVPreview';
import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Templates from "./Templates.jsx";
import Preview from "./Preview.jsx";
import Nopage from "./Nopage";
import Builder from "./Builder.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  return (
  // <MyContext.Provider value={{  }}>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}>

        </Route>
        <Route path="builder/:id" element={<Builder />}>

        </Route>
        <Route path="templates" element={<Templates />}>

        </Route>
        <Route path="templates/:id" element={<Templates />}>

        </Route>
        <Route path="dashboard" element={<Dashboard />}>

        </Route>
        <Route path="builder" element={<Builder />}>

        </Route>
        <Route path="preview" element={<Preview />}>

        </Route>
        <Route path="login" element={<Login />}>

        </Route>
        <Route path="register" element={<Register />}>

        </Route>
        <Route path="*" element={<Nopage />}>

        </Route>
      </Route>
    </Routes>
  // </MyContext.Provider>
)
}

export default App