import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import { data } from "./data";

const Router = () => {
  //useNavigate -> 파라미터를 넣을 수 있음

  const [letters, setLetters] = useState(data);
  //console.log(letters);
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
