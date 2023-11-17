import { useState, useContext } from "react";
import uuid from "react-uuid";
import List from "components/List";
import InputForm from "components/InputForm";
import Member from "components/Member";
import Header from "components/Header";
import { LettersContext } from "context/LettersContext";
import { SelectMemberContext } from "context/LettersContext";
function Home() {
  //버튼 클릭할때마다 특정 화면만 보여주기
  const [selectedMember, setSelectedMember] = useState("전체보기");
  const { letters } = useContext(LettersContext);
  return (
    <div>
      <Header />
      <InputForm uuid={uuid} />
      <SelectMemberContext.Provider
        value={{
          selectedMember,
          setSelectedMember,
        }}
      >
        <Member />

        {letters.length === 0 ? <h6>남겨진 팬레터가 없습니다.</h6> : <List />}
      </SelectMemberContext.Provider>
    </div>
  );
}

export default Home;
