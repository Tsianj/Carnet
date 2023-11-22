import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesPage from './pages/NotesPage';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AuthContext from './components/AuthContext';
import Auth from './services/Auth';
import Navbar from './components/NavBar';

Auth.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(Auth.isAuthenticated());
  const [user, setUser] = useState(JSON.parse(Auth.getUser()));

  return (
    <>
    <AuthContext.Provider
    value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />}/>
          <Route path={"/notes"} element={<NotesPage />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </AuthContext.Provider>
    </>
    
  );
}

export default App;
