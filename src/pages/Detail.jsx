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
  background-color: #fff;

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
function Detail({ letters, setLetters }) {
  const navigate = useNavigate();
  const params = useParams();
  const foundData = data.find((item) => {
    return item.id === params.id;
  });

  //console.log("params", params);
  console.log("found", foundData);

  const deleteBtn = () => {
    // 선택된 아이템을 제외한 새로운 배열 생성
    const newLetters = letters?.filter((item) => item.id != foundData.id);
    // 상태 업데이트
    setLetters(newLetters);
    // 메인 페이지로 가기
    navigate("/");
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
        <LetterContents>{foundData.content}</LetterContents>

        <h3>Written By {foundData.nickname}</h3>
        <h3>{foundData.createdAt}</h3>
      </BigBox>
      <ModfiyRemoveBtn>
        <button>수정</button>
        <button onClick={deleteBtn}>삭제</button>
      </ModfiyRemoveBtn>
    </DetailBox>
  );
}

export default Detail;
