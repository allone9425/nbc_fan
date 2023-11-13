import styled from "styled-components";
import uuid from "react-uuid";
import { useState } from "react";
import cover from "../assets/cover.jpg";
const KuromiColor = "#d8c6de";
const MyMelodyColor = "#f4cad6";

const Header = styled.header`
  background: url(${cover});
  background-size: cover;
  background-position: center;
  padding: 100px;
  h2 {
    font-size: 30px;
    text-align: center;
    margin: 30px 0;
    font-weight: bold;
  }
`;

const MemberBox = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 70px;

  li {
    background-color: ${KuromiColor};
    padding: 15px 10px;
    border-radius: 5px;
    border: 2px double #fff;
    margin: 0 10px;
    width: 100px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:last-child {
      background-color: ${MyMelodyColor};
    }
    &:first-child {
      background: linear-gradient(
        90deg,
        rgba(216, 198, 222, 1) 0%,
        rgba(244, 202, 214, 1) 100%
      );
    }

    &:hover {
      background-color: #fffacd;
    }
  }
`;

const FormBox = styled.form`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: ${KuromiColor};
  border: 1px solid #aaa;
  box-shadow: 3px 3px 5px #aaa;
  font-size: 16px;
  padding: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-radius: 10px;
  button {
    border: none;
    font-weight: 500;
    padding: 20px 10px;
    background-color: ${MyMelodyColor};
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #fffacd;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  select {
    padding: 10px 20px;
    width: calc(100% - 156px);
    border: none;
    font-size: 20px;
    outline: none;
    font-weight: 500;
    font-family: inherit;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none; /* 화살표 없애기 for firefox*/
    appearance: none; /* 화살표 없애기 공통*/
    &::-ms-expand {
      display: none; /*for IE10,11*/
    }
  }

  label {
    padding-right: 20px;
    font-size: 20px;
    font-weight: 600;
  }

  textarea {
    padding: 10px;
    width: calc(100% - 60px);
    height: 66px;
    border: none;
    font-weight: 500;
    &::placeholder {
      color: #ccc;
    }
    font-size: 20px;
  }

  input {
    font-weight: 500;
    padding: 10px;
    width: calc(100% - 60px);
    border: none;
    &::placeholder {
      color: #ccc;
    }
    font-size: 20px;
  }
`;

const MainList = styled.section`
  /*background-color: beige;*/
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
  padding: 40px 0;
  font-size: 22px;
  line-height: 2rem;
`;

const MainBox = styled.div`
  border: 1px solid #aaa;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 5px #aaa;
  margin: 30px 0;
  position: relative;
  img {
    width: 80px;
    height: 80px;
  }
  .MainText {
    margin-top: 20px;
    /* background-color: pink;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 30px;
  }

  section {
    display: flex;

    align-items: center;

    /*background-color: skyblue;*/

    .NameDate {
      margin-left: 30px;
      font-weight: bold;
    }
  }
`;

const ToWho = styled.p`
  position: absolute;
  right: 20px;
  font-weight: bold;
  color: ${(props) => props.fontcolor || "#A1619D"};
`;
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

  return (
    <div>
      <Header>
        <h2>아티스트 컬렉션</h2>
      </Header>

      <FormBox>
        <FormGroup>
          <label htmlFor="input-name">누구에게 보내요?</label>
          <select onChange={plusMember}>
            <option value={"쿠로미"}>쿠로미</option>
            <option value={"마이멜로디"}>마이멜로디</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="input-name">이름</label>
          <input
            type="text"
            id="input-name"
            maxLength={20}
            placeholder="최대 20글자까지 입력할 수 있어요!"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="input-text">내용</label>
          <textarea
            id="input-text"
            maxLength={100}
            placeholder="최대 100글자까지 입력할 수 있어요!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormGroup>
        <button type="submit" onClick={onSubmitHandler}>
          메세지 보내기
        </button>
      </FormBox>
      <MemberBox>
        <li>전체보기</li>
        <li>쿠로미</li>
        <li>마이멜로디</li>
      </MemberBox>
      <MainList>
        {letters
          /*.filter(function (letter) {
            return letter.writedTo === "쿠로미";
          })*/
          .map(function (item) {
            const fontColor = item.writedTo == "쿠로미" ? "#A1619D" : "#E86F9A";
            return (
              <MainBox>
                <ToWho fontcolor={fontColor}>To. {item.writedTo}</ToWho>
                <section>
                  <p>
                    <img src={item.avatar} alt="사진" />
                  </p>
                  <div className="NameDate">
                    <h3>{item.nickname}</h3>

                    <p>{item.createdAt}</p>
                  </div>
                </section>

                <div className="MainText">{item.content}</div>
              </MainBox>
            );
          })}

        {/* <MainBox>
          <section>
            <p>
              <img src="https://placekitten.com/80/80" alt="사진"></img>
            </p>
            <div className="NameDate">
              <h3>샛별</h3>
              <p>2023-11-10 08:34</p>
            </div>
          </section>
          <div className="MainText">
            죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는
            바람에도 나는 괴로워했다. 별을 노래하는 마음으로 모든 죽어 가는 것을
            사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.
          </div>
        </MainBox> */}
      </MainList>
    </div>
  );
}

export default Home;
