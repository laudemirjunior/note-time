import styled from "styled-components";
import { Title } from "../../components/cardGroups/styles";



export const Container = styled.div`
  width: 100%;
  display: flex;
`;


export const Box = styled.div`
  width: 80%;
  display: flex;
  margin: 2px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column ;

`;

export const GroupBox = styled(Box)`
width: 90%;
height: 80%;
justify-content: flex-start;
align-items: flex-start;
margin: 10px;
padding: 5px;`

export const InputBox = styled(Box)`
flex-direction: row;
width: 90%;
justify-content: space-between ;
`

export const PageTitle = styled(Title)`
margin-bottom: 20px;`

export const SearchInput = styled.input`
width: 80%;
height: 40px ;
border-radius: 20px ;
padding: 5px ;
border: 1px solid #80BBDF ;
`
