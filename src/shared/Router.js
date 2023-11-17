import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import data from "./data.json";
import uuid from "react-uuid";

const Router = () => {
  //useNavigate -> 파라미터를 넣을 수 있음
  console.log(data);
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
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        />

        {/* <Route path="/" element={<Home />} />
   
         <Route path="Detail/:id" element={<Detail />}  /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
