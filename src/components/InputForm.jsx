import { useState } from "react";
import styled from "styled-components";
import { data } from "shared/data";

const FormBox = styled.form`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: #d8c6de;
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
    background-color: #f4cad6;
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

function InputForm({ letters, uuid, setLetters }) {
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
      //nowKor = now.toDateString()은 현재 날짜를 문자열로 변환,
      // now.toLocaleTimeString()은 현재 시간을 문자열로 변환 해서 둘다 ``으로 합치기
      const nowKor = `${now.toDateString()} ${now.toLocaleTimeString()}`;
      const newLetters = {
        createdAt: nowKor,
        nickname: nickname,
        avatar: require("../assets/default.svg").default,
        content: content,
        writedTo: member,
        id: uuid(),
      };
      setLetters([...letters, newLetters]);
      data.push(newLetters);
      setNickname("");
      setContent("");
      setMember("");
    } else {
      alert("이름과 내용은 필수 입력값입니다.");
    }
  };
  return (
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
  );
}

export default InputForm;
