import uuid from "react-uuid";
import { useState } from "react";

import List from "components/List";
import InputForm from "components/InputForm";
import Member from "components/Member";
import Header from "components/Header";

function Home() {
  const [letters, setLetters] = useState([
    {
      createdAt: "2023-11-03T02:07:09.423Z",
      nickname: "별헤는 밤",
      avatar: require("../assets/1.svg").default,
      content:
        "별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니.",
      writedTo: "쿠로미",
      id: uuid(),
    },
    {
      createdAt: "2023-11-02T23:13:18.491Z",
      nickname: "서시",
      avatar: require("../assets/2.svg").default,
      content:
        "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다. 별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지",
      writedTo: "마이멜로디",
      id: uuid(),
    },
    {
      createdAt: "2023-11-02T11:25:37.026Z",
      nickname: "꽃",
      avatar: require("../assets/3.svg").default,
      content:
        "내가 그의 이름을 불러주기 전에는 그는 다만 하나의 몸짓에 지나지 않았다. 내가 그의 이름을 불러주었을 때, 그는 나에게로 와서 꽃이 되었다.",
      writedTo: "마이멜로디",
      id: uuid(),
    },
    {
      createdAt: "2023-11-02T16:06:34.150Z",
      nickname: "풀꽃",
      avatar: require("../assets/4.svg").default,
      content: "자세히 보아야 예쁘다. 오래 보아야 사랑스럽다. 너도 그렇다.",
      writedTo: "쿠로미",
      id: uuid(),
    },
    {
      createdAt: "2023-11-03T05:40:17.575Z",
      nickname: "꽃밭",
      avatar: require("../assets/5.svg").default,
      content:
        "마음에 사무치면 꽃이 핀다더니 너 때문에 내 마음엔 이미 발 디딜 틈 없는 너만의 꽃밭이 생겼더구나",
      writedTo: "마이멜로디",
      id: uuid(),
    },
    {
      createdAt: "2023-11-05T05:40:17.575Z",
      nickname: "내가 너를",
      avatar: require("../assets/default.svg").default,
      content:
        "너를 좋아하는 마음은 오로지 나의 것이요. 나의 그리움은 나 혼자만의 것으로도 차고 넘치니까....",
      writedTo: "쿠로미",
      id: uuid(),
    },
  ]);

  //추가하기
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const [member, setMember] = useState("쿠로미");
  const plusMember = function (e) {
    setMember(e.target.value);
  };

  const onSubmitHandler = (e) => {
    //alert("연결확인");
    e.preventDefault();
    //추가하기 유효성 검사
    //매개변수 nickname과 content를 받아서,
    //두 값이 모두 존재하면 true를 반환하고,
    //그렇지 않으면 false를 반환합니다.
    const inputValid = (nickname, content) => {
      return nickname && content;
    };

    //입력값이 유효한지 확인
    if (inputValid(nickname, content)) {
      const now = new Date();
      const newLetters = {
        createdAt: String(now),
        nickname: nickname,
        avatar: require("../assets/default.svg").default,
        content: content,
        writedTo: member,
        id: uuid(),
      };
      setLetters([...letters, newLetters]);
      setNickname("");
      setContent("");
      setMember("");
    } else {
      alert("이름과 내용은 필수 입력값입니다.");
    }
  };

  //버튼 클릭할때마다 특정 화면만 보여주기
  const [selectedMember, setSelectedMember] = useState("전체보기");
  return (
    <div>
      <Header />
      <InputForm
        plusMember={plusMember}
        nickname={nickname}
        setNickname={setNickname}
        content={content}
        setContent={setContent}
        onSubmitHandler={onSubmitHandler}
      />

      <Member
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <List selectedMember={selectedMember} letters={letters} />
    </div>
  );
}

export default Home;
