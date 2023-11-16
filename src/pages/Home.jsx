import { useEffect, useState } from "react";
import uuid from "react-uuid";
import List from "components/List";
import InputForm from "components/InputForm";
import Member from "components/Member";
import Header from "components/Header";

function Home({ letters, setLetters }) {
  //버튼 클릭할때마다 특정 화면만 보여주기
  const [selectedMember, setSelectedMember] = useState("전체보기");

  return (
    <div>
      <Header />
      <InputForm letters={letters} uuid={uuid} setLetters={setLetters} />

      <Member
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />

      {letters.length === 0 ? (
        <h6>남겨진 팬레터가 없습니다.</h6>
      ) : (
        <List selectedMember={selectedMember} letters={letters} />
      )}
    </div>
  );
}

export default Home;
