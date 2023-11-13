import styled from "styled-components";

function Home() {
  const Header = styled.header`
    background-color: #ffc8dd;
    padding: 100px;
    h2{
      font-size: 30px;
      text-align: center;
      margin: 30px 0;
      font-weight: bold;
    }
  `;


  const MemberBox = styled.ul`
    display: flex;
    justify-content: center;

    li{
      background-color: #cdb4db;
      padding: 15px 10px;
      border-radius: 5px;
      margin: 0 10px;
      cursor: pointer;

    }
  `;


  const FormBox = styled.form`
    max-width: 1200px;
    min-width: 800px;
    margin: 100px auto;
    background-color: lemonchiffon;
    border: 1px solid #999;
    box-shadow: 3px 3px 5px #aaa;
    font-size: 16px;
    padding: 50px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    border-radius: 10px;
    button{
      border:none;
      padding: 10px;
      background-color: pink;
      font-size:16px;
      border-radius : 8px;
    }
  `;

  const FormGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    select{
      padding: 10px 20px;
      width: calc(100% - 177px);
      border: none;
      font-size:16px;
      outline: none;
      -webkit-appearance: none; /* 화살표 없애기 for chrome*/
      -moz-appearance: none; /* 화살표 없애기 for firefox*/
      appearance: none; /* 화살표 없애기 공통*/
      &::-ms-expand {
        display: none; /*for IE10,11*/
      }
    }

    label{
      padding-right: 20px;
      font-size: 20px;
    }

    textarea{
      padding: 10px;
      width: calc(100% - 60px);
      height: 100px;
      border: none;
      &::placeholder {
        color: #ccc;
      }
      font-size:16px;
    }

    input{
      padding: 10px;
      width: calc(100% - 60px);
      border: none;
      &::placeholder {
        color: #ccc;
      }
      font-size:16px;
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
    border: 1px solid #999;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px #aaa;
    margin: 30px 0;

    .MainText{
      margin-top: 20px ;
      /* background-color: pink;*/
       text-overflow: ellipsis;
       white-space : nowrap;
       overflow:hidden;
       height: 30px;
    }

    section{
      display: flex;

      align-items: center;
  
      /*background-color: skyblue;*/
  
      .NameDate{
        margin-left: 30px;
        font-weight: bold;
      }
  
  
    }

  `;

  //현재 날짜와 시간 구하기 let now = new Date();
  return (
    <div>
      <Header>
        <h2>아티스트 컬렉션</h2>
        <MemberBox>
          <li>마이멜로디</li>
          <li>쿠로미</li>        
        </MemberBox>
      </Header>

      <FormBox>
        <FormGroup>
          <label htmlFor="input-name">누구에게 보내요?</label>
          <select>
            <option>마이멜로디</option>
            <option>쿠로미</option>

          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="input-name">이름</label>
          <input
            type="text"
            id="input-name"
            maxLength={20}
            placeholder="최대 20글자까지 입력할 수 있어요!"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="input-text">내용</label>
          <textarea
            id="input-text"
            maxLength={100}
            placeholder="최대 100글자까지 입력할 수 있어요!"
          />
        </FormGroup>
        <button>메세지 보내기</button>
      </FormBox>

      <MainList>
        <MainBox>
          <section>
            <p>
              <img src="https://placekitten.com/80/80" alt="사진"/>
            </p>
            <div className="NameDate">
              <h3>샛별</h3>
              <p>2023-11-10 08:34</p>
            </div>
          </section>
          <div className="MainText">
          죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다.
          별을 노래하는 마음으로 모든 죽어 가는 것을 사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.
          </div>
        </MainBox>
        <MainBox>
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
          죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다.
          별을 노래하는 마음으로 모든 죽어 가는 것을 사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.
          </div>
        </MainBox>
        <MainBox>
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
          죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다.
          별을 노래하는 마음으로 모든 죽어 가는 것을 사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.
          </div>
        </MainBox>
      </MainList>
    </div>
  );
}

export default Home;
