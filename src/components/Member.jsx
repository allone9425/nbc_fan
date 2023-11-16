import styled from "styled-components";
const MemberBox = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  align-items: center;

  li {
    background-color: #d8c6de;
    padding: 15px 10px;
    border-radius: 5px;
    // border: 2px double #fff;
    margin: 0 10px;
    width: 100px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:last-child {
      background-color: #f4cad6;
    }
    &:first-child {
      background: linear-gradient(
        90deg,
        rgba(216, 198, 222, 1) 0%,
        rgba(244, 202, 214, 1) 100%
      );
    }

    &:hover {
      background: #fffacd;
    }

    &.selected {
      border: 4px solid #a1619d;

      box-sizing: border-box;
    }
  }
`;

function Member({ setSelectedMember, selectedMember }) {
  return (
    <MemberBox>
      <li
        className={selectedMember === "전체보기" ? "selected" : ""}
        onClick={function () {
          setSelectedMember("전체보기");
        }}
      >
        전체보기
      </li>
      <li
        className={selectedMember === "쿠로미" ? "selected" : ""}
        onClick={function () {
          setSelectedMember("쿠로미");
        }}
      >
        쿠로미
      </li>
      <li
        className={selectedMember === "마이멜로디" ? "selected" : ""}
        onClick={function () {
          setSelectedMember("마이멜로디");
        }}
      >
        마이멜로디
      </li>
    </MemberBox>
  );
}

export default Member;
