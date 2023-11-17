import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import data from "./data.json";
import uuid from "react-uuid";
import { LettersContext } from "context/LettersContext";
const Router = () => {
  //console.log(data);
  const [letters, setLetters] = useState(
    data.map((aData) => {
      return {
        ...aData,
        id: uuid(),
      };
    })
  );
  return (
    <BrowserRouter>
      <LettersContext.Provider
        value={{
          letters,
          setLetters,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </LettersContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
