import styled from "styled-components";
import { generateMedia } from "styled-media-query";

// Refatorar esta merda de nomenclatura seguindo padrão de %
const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  netbook: "830px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #fff;
  a {
    color: #fff;
  }
  font-weight: 550;
  width: 55%;
  height: 18px;
  word-wrap: normal;
  div {
    font-size: 12px;
    font-weight: 550;
    margin: 0px 7px;
    :hover {
      // color: var(--default-color-hover);
      cursor: pointer;
    }
  }
  ${customMedia.lessThan("notebook")`
   width: 62%;
  `}
`;

export const background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-top: 1px solid #81818178;
  height: 100%;
  min-width: 100%;
  top: 90px;
  left: 0;
  right: 0;
  z-index: 998;
  position: fixed;

  ${customMedia.lessThan("netbook")`
    
    display: none;
  `}
`;

export const modal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  top: 0;
  left: 0;

  min-height: 273px;
  width: 100%;

  background-color: var(--default-color-hover);

  h2 {
    font-size: 20px;

    margin-bottom: 30px;
    color: var(--header-font-color);
    :hover {
      cursor: pointer;
      // color: rgb(237, 226, 202);
    }
  }

  h4 {
    flex-basis: 32%;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--header-font-color);
    :hover {
      // color: rgb(237, 226, 202);
    }
  }

  ${customMedia.lessThan("notebook")`

    h2{
      margin-top:10px;
    }
  
    h4{
      font-size: 13px;
    }
  
    `}

  ${customMedia.lessThan("tablet")`
    
  h2{
    margin-top:0px;
  }

  h4{
    font-size: 14px;
  }

  `}
`;
export const screen = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1350px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  ${customMedia.lessThan("desktop")`
    max-width: 1100px;
  `}

  ${customMedia.lessThan("notebook")`
    max-width: 700px;
    max-height: 250px;
  `}
   ${customMedia.lessThan("netbook")`
 
  `}
  ${customMedia.lessThan("tablet")`
    flex-direction: column;

    min-height: 60vh;

    max-width: 100%;
   
    
`}
${customMedia.lessThan("mobile")`
    min-height: 50vh;

`}
`;
export const category = styled.div`
  width: 100%;

  min-height: 243px;
  margin-left: 20px;
  align-self: flex-start;
  div {
    width: 100%;
    display: flex;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    :hover {
      cursor: pointer;
      color: rgb(237, 226, 202);
    }
  }

  ${customMedia.lessThan("desktop")`
   justify-content: space-around;
   width:64%;
  `}
  ${customMedia.lessThan("notebook")`
   margin-right: 11px;
   width:64%;
  `}

  ${customMedia.lessThan("tablet")`
    section{
      flex-basis: 32%;
      flex-wrap: wrap;
    }
    margin-left: 20px;

  `}

${customMedia.lessThan("mobile")`
  margin: 10px 0px 0px 20px;
   
  `}
`;
