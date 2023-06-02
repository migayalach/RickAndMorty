import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import About from "./components/About";
import Detail from "./components/Deatil";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Error";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  // console.log(location.pathname);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const email = "miguel@gmail.com";
  const password = "10mike";
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const respuesta = verificarPersonaje(data.id, characters);
      if (respuesta === true) window.alert("El personaje ya existe no se puede repetir :C");
      else {
        if (data.id) setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  const verificarPersonaje = (id, characters) => {
    let aux = false;
    for (const i of characters) {
      if (id === i.id) {
        aux = true;
        break;
      }
    }
    return aux;
  };

  const onClose = (id) => {
    let newId = parseInt(id);
    const newCharacters = characters.filter(
      (personajes) => personajes.id !== newId
    );
    setCharacters(newCharacters);
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess (data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":id" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
