import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;

  #sidebar {
    display: none;
  }

  #mobilebar {
    bottom: 0;
    position: fixed;
    width: 100%;
    background: linear-gradient(
      174.56deg,
      rgba(15, 176, 176, 0.8) 0%,
      rgba(0, 47, 214, 0.8) 100%
    );

    svg {
      color: #ffffff;
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    #sidebar {
      display: flex;
    }

    #mobilebar {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 60px;
  padding: 8px;

  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  section:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    padding: 0px;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin-top: 15px;

  input {
    border-radius: 10px;
    border: 3px solid #0077c0;
    outline: none;
    width: 45%;
    height: 30px;
    padding: 10px;
    font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 25px;
    }
  }

  @media (min-width: 1024px) {
    h4 {
      display: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      font-size: 25px;
    }
  }

  button {
    padding: 5px;
    width: 80px;
    border-radius: 10px;
    background-color: #0077c0;
    color: #ffffff;
    font-size: 15px;
  }
`;

export const RecentActivities = styled.div`
  display: flex;
  gap: 20px;
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
