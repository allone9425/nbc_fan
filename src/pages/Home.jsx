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

  const Memberbox = styled.ul`
    display: flex;
    justify-content: center;
  `;
  const Name = styled.li`
    background-color: #cdb4db;
    padding: 10px 5px;
    margin: 0 10px;
  `;
  return (
    <div>
      <Header>
        <Title>아티스트 컬렉션</Title>
        <Memberbox>
          <Name>철수</Name>
          <Name>영희</Name>
          <Name>길고양이</Name>
        </Memberbox>
      </Header>
    </div>
  );
}

export default Home;
