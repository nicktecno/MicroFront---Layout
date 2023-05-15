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
  justify-content: space-between;
  color: var(--header-secondary-font-color);
  a {
    color: var(--header-font-color);
  }
  font-weight: 550;
  flex: 1;
  height: 18px;

  word-wrap: normal;
  div {
    font-size: 12px;
    min-width: 150px;
    max-width: max-content;
    text-align: center;
    justify-content: center;
    font-weight: 550;
    ${customMedia.lessThan("tablet")`
    display:none;
  
  
  `}

    ${customMedia.lessThan("1100px")`
     min-width: 120px;
  
    font-size:11px;
  
  
  `}

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
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
  position: fixed;

  animation: fadeOnly 300ms forwards;

  @keyframes fadeOnly {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }

  ${customMedia.lessThan("tablet")`
    
    display: none;
  `}
`;

export const ModalNameCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  top: 60px;
  font-size: 13px;
  cursor: pointer;
  min-width: 150px;
  min-height: 29px;
  width: max-content;
  padding: 0px 3px;
  text-transform: uppercase;
  border-radius: 5px 5px 0px 0px;

  background-color: var(--explore-block-color);

  ${customMedia.lessThan("1100px")`
    font-size:11px;
    min-width: 120px;
  `}
`;

export const modal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  top: 60px;

  min-height: 273px;
  width: 600px;
  background-color: var(--explore-block-color);
  border-bottom-color: ${(props) =>
    props.color === "" ? `var(--default-color-hover)` : props.color};
  border-bottom-width: 6px;
  border-bottom-style: solid;

  margin-left: ${(props) =>
    props.marginLeftIndex0
      ? "-30px"
      : props.marginLeftIndex1
      ? "-200px"
      : props.marginLeftIndex2
      ? "-350px"
      : props.marginLeftIndex3
      ? "-420px"
      : "-30px"};

  ${customMedia.lessThan("1100px")`
     margin-left: ${(props) =>
       props.marginLeftIndex0
         ? "-30px"
         : props.marginLeftIndex1
         ? "-200px"
         : props.marginLeftIndex2
         ? "-350px"
         : props.marginLeftIndex3
         ? "-460px"
         : "-30px"};

  `}

  h2 {
    font-size: 20px;

    margin-bottom: 30px;
    color: var(--header-secondary-font-color);
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
    font-size: 13px;
    color: var(--font-color);
    :hover {
      // color: rgb(237, 226, 202);
    }
  }
`;
export const screen = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
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
  display: flex;
  min-height: 243px;
  max-height: 243px;
  max-width: 150px;
  margin-left: 20px;

  flex-direction: column;

  h4 {
    height: 20px;
    margin-bottom: 3px;
    :hover {
      cursor: pointer;
      color: var(--default-color-hover);
    }
  }
`;

export const SeeMore = styled.div`
  font-weight: 500;
  margin-top: 5px;
  color: ${(props) =>
    props.color === "" ? `var(--default-color)` : props.color};
  cursor: pointer;
  :hover {
    cursor: pointer;
    color: var(--default-color-hover);
  }
`;

export const ContainerPromotion = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;

  img {
    width: 200px;
    height: 200px;
  }
`;
