import styled from "styled-components";

export const Container = styled.div`
  /* position: absolute; */
  height: 100vh;
  width: 320px;
  background: linear-gradient(
    150.58deg,
    rgba(15, 176, 176, 0.8) 0%,
    rgba(0, 47, 214, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  #links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    div {
      display: flex;
      width: 200px;
      gap: 10px;
      font-size: 20px;
      color: var(--white);

      cursor: pointer;
    }
  }
  #user {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 200px;
      display: flex;
      align-items: center;
      gap: 20px;
      div {
        width: 40px;
        height: 40px;
        background-color: var(--white);
        border-radius: 50%;
      }
      p,
      a {
        font-size: 20px;
        color: var(--white);
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
