import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  width: 70%;

  @media screen and (max-width: 700px) {
    width: 95%;
  }

`;

export const Main = styled.div`
height: 500px;
padding: 30px;
background-color: #f6f6f6;
border-radius: 20px;
margin-top: 2rem;
/* 
  overflow: hidden;
  overflow-y: scroll;  
  
  ::-webkit-scrollbar-track {
    background-color: #D9D9D9;
    border-radius: 5%;
  }
  ::-webkit-scrollbar {
    width: 14px;
    background: #D9D9D9;
    border-radius: 5%;
  }
   ::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius: 5%;

  }
 */

.sistemasOperacionais{


  .paragrafoInicial{
    display: flex;
    justify-content: center;
    color: #686868;

    .containerLogoInicial {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

/* 
      .logoName {
        color: #502e88;
        font-size: large;
        font-weight: 500;
      } */

    }

  }

  .paragrafoInicialHide{
    display: none;
  }

  .hideDIv {
      display: none;
    }
}


.logoName {
  color: #502e88;
  font-size: large;
  font-weight: 500;
}

.heading {
    display: none;
  }

.logo {
    height: 70px;
    width: 70px;
    padding: 15px;
    color: #ffffff;
    background-color: #502e88;
    border-radius: 20px;
  }

  .sistemaLogo {
    display: flex;
    gap: 10px;

      .logoConteudo {
      height: 35px;
      width: 35px;
      padding: 7px;
      color: #ffffff;
      background-color: #502e88;
      border-radius: 50px;
    }

    .windowsName {
      color: #502e88;
      font-size: large;
      font-weight: 500;
    }

    p {

      color: #502e88;
  font-size: large;
  font-weight: 500;
    }

  }


  .paginaInicial {
    display: flex;
    height: 60vh;
    justify-content: space-evenly;
    margin: auto;
    align-items: center;
  }

  .containerInfoParent{
    height: 60vh;
  padding: 30px;
  background-color: #f6f6f6;
  border-radius: 20px;
  /* margin-top: 2rem; */


  overflow: hidden;
  overflow-y: scroll;  
  
  ::-webkit-scrollbar-track {
    background-color: #D9D9D9;
    border-radius: 50px;

  }
  ::-webkit-scrollbar {
    width: 12px;
    border-radius: 50px;

    background: #D9D9D9;
  }
   ::-webkit-scrollbar-thumb {
    background: #BAB8BB;
    border-radius: 50px;

  }


  }

  .containerInfo{
    display: grid;
      grid-template-columns: 1fr 1fr ;
      margin: 0 auto;
      margin-bottom: 3rem;
      margin-top: 1rem;
  }

  .contentDiv1{
      min-height: 300px;
      min-width: 300px;       
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        img{
          min-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;
      }

    }


.contentDiv1::before{
  content: "1";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv2{
      /* height: 260px;
      width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        img{
          min-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;
      }

}

.contentDiv2::before{
  content: "2";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv3{
      min-height: 400px;
      min-width: 300px;
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }

        img{
          min-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }

}

.contentDiv3::before{
  content: "3";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv4{
  /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }

        img{
          min-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv4::before{
  content: "4";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv5{
      /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          min-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv5::before{
  content: "5";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}


.contentDiv6{
      /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;
        
        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv6::before{
  content: "6";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv7{
      /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv7::before{
  content: "7";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv8{
      /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv8::before{
  content: "8";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentDiv9{
      /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv9::before{
  content: "9";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentDiv10{
      /* height: 260px; */
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;
      
      p {
        color:#686868;
      }

      li {
        color:#686868;
      }

      .contentBody {
        display: flex;
        gap: 10px;
      }

      img {
        border-radius: 10px;
      }

      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        /* min-height : 200px; */
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        /* min-height : 200px; */
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentDiv10::before{
  content: "10";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

@media screen and (max-width: 1250px) {
  .containerInfo{
    display: grid;
    gap: 30px;
      grid-template-columns: 1fr ;
      margin: 0 auto;
      margin-bottom: 3rem;
      margin-top: 1rem;
  }
}

@media only screen and (max-width: 750px) {
  padding: 10px;

  .containerInfoParent{
  height: 60vh;
  padding: 0;
  background-color: #f6f6f6;
  border-radius: 20px;
  /* margin-top: 2rem; */
  
  }
}

@media only screen and (max-width: 500px) {

  .paginaInicial {
    display: flex;
    flex-direction: column;
    /* height: 60vh; */
    justify-content: flex-start;
    gap: 30px;
    margin: 0 auto;
    margin-top: 2rem;
    align-items: center;
  }
}


.contentmac1 {
      height: 300px;
      /* width: 370px; */
      gap: 40px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac1::before{
  content: "1";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentmac2{
      /* height: 260px;
      width: 370px; */
      height: 300px;
      gap: 10px;
      margin: 0 0 0 20px;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      @media screen and (max-width: 500px) {
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        img{
          min-width: 100px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;
      }

}

.contentmac2::before{
  content: "2";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;
}

.contentmac3 {
      height: 340px;
      /* width: 370px; */
      gap: 40px;
      margin: 0 20px 0 0;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac3::before{
  content: "3";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentmac4 {
      height: 340px;
      /* width: 370px; */
      gap: 40px;
      margin: 0 0 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac4::before{
  content: "4";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentmac5 {
  height: 340px;
      /* width: 370px; */
      gap: 40px;
      margin: 0 20px 0 0;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac5::before{
  content: "5";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentmac6 {
      height: 340px;
      /* width: 370px; */
      gap: 40px;
      margin: 0 0 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac6::before{
  content: "6";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentmac7 {
      height: 250px;
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;

        ul {
          margin-left: 30px;

          li {
            line-height: 20px;
          }
        }
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac7::before{
  content: "7";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

}

.contentmac8 {
  height: 250px;
      /* width: 370px; */
      gap: 10px;
      margin: 0 20px;
      background-color: #D9D9D9;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      padding: 20px;
      border-radius: 35px;
      position: relative;

      p {
        color:#686868;

        ul {
          margin-left: 30px;

          li {
            line-height: 20px;
          }
        }
      }


      @media screen and (max-width: 500px) {
        /* max-width: 285px; */
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;


        p{
          word-break: break-all;
        }

        img{
          max-width: 200px;
          min-height: 100px;
        }
      }

      @media screen and (max-width:355px) {
        max-width: 200px;
        min-height : unset;
        min-width: unset;
        padding: 10px;
        gap: 0;

        p{
          word-break: break-all;
        }
      }
}

.contentmac8::before{
  content: "8";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  border-radius: 50%;
  background-color: #502e88;
  position: absolute;
  left: -15px;
  top: 1px;

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

`;
