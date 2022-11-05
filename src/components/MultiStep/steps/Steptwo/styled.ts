import styled from "styled-components"


export const  Container = styled.div`
max-width: 900px;
width: 100%;
`

export const Introducao = styled.div`
max-width: 900px;
width: 96%;
margin: 0 auto;
margin-top: 1rem;
height: 500px;
border-radius: 20px;
padding: 30px;
background-color: #F6F6F6;

`

export const ContainerConteudo = styled.div`
  height: 450px;
  overflow: hidden;
  overflow-y: scroll;
  padding-left: 20px;
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  .linkExterno{
   color: #557AFF;
   text-decoration: underline;
   margin-left: 5px;
}


p {
    color: #686868;
    margin-bottom: 1.5rem;
 }

 p:before {
    content: " ";
   width: 15px;
   height: 15px;
  background-color: #502E88;
  display: inline-block; 
  margin-left: -1em;
  margin-right: 10px;
  border-radius: 20px;
 }
 ul {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
}
ul > li:before {
    display: inline-block;
    content: "-";
    width: 1em;
    margin-left: -1em;
}
 li {
  color: #686868;
  margin-bottom: 1rem;
 }

`


export const WrapperButton = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  gap: 20px;

  @media screen and (max-width: 500px) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  height: 40px;
  color: ${(props) => props.color};
  font-size: 20px;
  border: none;
  border-radius: 20px;
  padding: 10px 60px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    padding: 10px 50px;
  }

  @media screen and (max-width: 450px) {
    padding: 10px 30px;
    font-size: large;
  }


  @media screen and (max-width: 350px) {
    padding: 10px 20px;
    font-size: medium;
  }

`