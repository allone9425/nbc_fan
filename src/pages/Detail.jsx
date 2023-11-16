import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { data } from "shared/data";
import styled from "styled-components";

const DetailBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const BigBox = styled.div`
  background-color: #d8c6de;
  max-width: 600px;
  min-width: 600px;
  border: 1px solid #aaa;

  box-shadow: 3px 3px 5px #aaa;
  margin: 20px 0;
  border-radius: 20px;
  padding: 50px;
  font-size: 20px;
  line-height: 2rem;
  img {
    width: 80px;
    height: 80px;
  }
  h2 {
    font-size: 30px;
    margin: 20px 50px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;
    color: #fff;
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
    text-align: right;
  }
`;

const BackBtn = styled.button`
  border: none;
  background-color: #f4cad6;
  cursor: pointer;
  padding: 10px 20px;
  font-family: inherit;
  font-weight: bold;
  border-radius: 5px;
  font-size: 20px;

  &:hover {
    background-color: #fffacd;
  }
`;

const LetterContents = styled.p`
  background-color: rgba(255, 255, 255, 0.5);

  border-radius: 10px;

  padding: 15px;
  line-height: 1.9rem;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  text-align: center;
`;

const ModfiyRemoveBtn = styled.div`
  text-align: right;
  button {
    border: none;
    background-color: #f4cad6;
    cursor: pointer;
    padding: 10px 20px;
    font-family: inherit;
    font-weight: bold;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 30px;

    &:last-child {
      margin-left: 20px;
    }
    &:hover {
      background-color: #fffacd;
    }
  }
`;

const EditTextArea = styled.textarea`
  width: 100%;
  height: 124px;
  margin-bottom: 20px;
  background-color: #fff;
  font-family: inherit;
  font-size: inherit;
  border-radius: 10px;
  border: none;
  padding: 15px;
  line-height: 1.9rem;
`;
function Detail({ letters, setLetters }) {
  //수정기능을 위한 스테이트
  //수정 중인지 아닌지 알려주는 스테이트
  const [edit, setEdit] = useState(false);

  //수정 중일때 상태 관리하는 스테이트
  const [editing, setEditing] = useState("");

  const navigate = useNavigate();
  //const location = useLocation();
  const params = useParams();
  const foundData = data.find((item) => {
    return item.id === params.id;
  });

  //console.log("params", params);
  //console.log("found", foundData);

  const deleteBtn = () => {
    // 삭제 확인하기  window.confirm
    const alertDelete = window.confirm("정말 삭제할래요?");
    if (alertDelete) {
      // 선택된 아이템을 제외한 새로운 배열 생성
      const newLetters = letters.filter((item) => item.id !== foundData.id);
      // 메인 페이지로 가기
      navigate("/");
      // 상태 업데이트
      setLetters(newLetters);
    }
  };

  const modifyBtn = () => {
    setEdit(true);
    setEditing(foundData.content);
  };

  const cancelBtn = () => {
    setEdit(false);
    setEditing("");
  };

  const saveBtn = () => {
    if (editing.trim() === foundData.content.trim()) {
      alert("아무런 수정사항이 없어요!");
    } else {
      const updateLetters = letters.map((item) =>
        item.id === foundData.id ? { ...item, content: editing } : item
      );
      setLetters(updateLetters);
      //navigate("/");
      setEdit(false);
    }
    console.log(editing);
  };

  return (
    <DetailBox>
      <Link to={"/"}>
        <BackBtn>&larr; 메인으로</BackBtn>
      </Link>

      <BigBox>
        {/*<h3>{foundData.id}</h3>*/}

        <Avatar>
          <img src={foundData.avatar} alt="사진" />
        </Avatar>
        <h2>To. {foundData.writedTo}</h2>
        {/*<LetterContents>{foundData.content}</LetterContents>*/}
        {edit ? (
          <EditTextArea
            value={editing}
            onChange={(e) => setEditing(e.target.value)}
          />
        ) : (
          <LetterContents>{foundData.content}</LetterContents>
        )}

        <h3>Written By {foundData.nickname}</h3>
        <h3>{foundData.createdAt}</h3>
      </BigBox>
      <ModfiyRemoveBtn>
        {edit ? (
          <>
            <button onClick={saveBtn}>완료</button>
            <button onClick={cancelBtn}>취소</button>
          </>
        ) : (
          <>
            <button onClick={modifyBtn}>수정</button>
            <button onClick={deleteBtn}>삭제</button>
          </>
        )}
      </ModfiyRemoveBtn>
    </DetailBox>
  );
}

export default Detail;
