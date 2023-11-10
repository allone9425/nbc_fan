import styled from "styled-components";

function Home() {
  const Header = styled.header`
    background-color: #ffc8dd;
    padding: 100px;
  `;

  const Title = styled.h2`
    font-size: 30px;
    text-align: center;
    margin: 30px 0;
    font-weight: bold;
  `;

  const MemberBox = styled.ul`
    display: flex;
    justify-content: center;
  `;
  const Member = styled.li`
    background-color: #cdb4db;
    padding: 10px 5px;
    margin: 0 10px;
    cursor: pointer;
  `;

  const FormBox = styled.form`
    max-width: 1200px;
    min-width: 800px;
    margin: 100px auto;
    background-color: lemonchiffon;
    font-size: 16px;
    padding: 50px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    border-radius: 10px;
  `;

  const FormGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const FormLabel = styled.label`
    padding-right: 20px;
    font-size: 20px;
  `;

  const FormInput = styled.input`
    padding: 10px;
    width: calc(100% - 60px);
    border: none;
    &::placeholder {
      color: #ccc;
    }
  `;

  const FormTextarea = styled.textarea`
    padding: 10px;
    width: calc(100% - 60px);
    height: 100px;
    border: none;
    &::placeholder {
      color: #ccc;
    }
  `;

  const Select = styled.select`
    padding: 10px 20px;
    width: calc(100% - 168px);
    border: none;

    outline: none;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none; /* 화살표 없애기 for firefox*/
    appearance: none; /* 화살표 없애기 공통*/
    &::-ms-expand {
      display: none; /*for IE10,11*/
    }
  `;

  const MainList = styled.section`
    background-color: beige;
    margin: auto;
    max-width: 1200px;
    min-width: 800px;
    padding: 30px 0;
    font-size: 22px;
    line-height: 2rem;
  `;

  const MainBox = styled.div`
    background-color: #fca400;
    padding: 20px;
  `;

  const MainGroup = styled.div`
    display: flex;

    align-items: center;

    background-color: skyblue;
  `;

  const NameDate = styled.div`
    margin-left: 30px;
    font-weight: bold;
  `;

  const MainText = styled.div`
    margin: 20px 0;

    background-color: pink;
  `;
  return (
    <div>
      <Header>
        <Title>아티스트 컬렉션</Title>
        <MemberBox>
          <Member>철수</Member>
          <Member>영희</Member>
          <Member>길고양이</Member>
        </MemberBox>
      </Header>

      <FormBox>
        <FormGroup>
          <FormLabel htmlFor="input-name">누구에게 보내요?</FormLabel>
          <Select>
            <option>철수</option>
            <option>영희</option>
            <option>길고양이</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="input-name">이름</FormLabel>
          <FormInput
            type="text"
            id="input-name"
            maxLength={20}
            placeholder="최대 20글자까지 입력할 수 있어요!"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="input-text">내용</FormLabel>
          <FormTextarea
            id="input-text"
            maxLength={100}
            placeholder="최대 100글자까지 입력할 수 있어요!"
          />
        </FormGroup>
      </FormBox>

      <MainList>
        <MainBox>
          <MainGroup>
            <p>
              <img src="https://placekitten.com/80/80"></img>
            </p>
            <NameDate>
              <h3>샛별</h3>
              <p>2023-11-10 08:34</p>
            </NameDate>
          </MainGroup>
          <MainText>
            노트북 아리아 바나나 여우별 가온해 도서관 미리내 로운 산들림 별빛
            도담도담 노트북 우리는 책방 도서 나비잠 여우비 도서관 미쁘다 미리내
            도담도담 늘품 예그리나 감사합니다 여우비 옅구름 포도 늘품 감사합니다
            가온누리 소록소록 별하 그루잠 나래 여우별 바나나 컴퓨터 노트북 별하
            사과 소솜 감사합니다 바람꽃 함초롱하다 컴퓨터 노트북 도서 도서관
            늘품 포도.
          </MainText>
        </MainBox>
      </MainList>
    </div>
  );
}

export default Home;
