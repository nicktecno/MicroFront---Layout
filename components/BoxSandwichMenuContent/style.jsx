import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

//menu
export const fundo = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0000008a;
`;

export const menu = styled.div`
  background-color: var(--menu-sandwich-body);
  height: 100%;
  ${customMedia.lessThan("tablet")`
        background-color: var(--menu-sandwich-body);
                      
    `}
  .children {
    position: relative;
    padding: 5px 0px;
    height: 100%;
    overflow: auto;
    -webkit-animation: slideIn 300ms forwards;
    -moz-animation: slideIn 300ms forwards;
    animation: slideIn 300ms forwards;

    @keyframes slideIn {
      0% {
        transform: translateX(-900px);
      }
      100% {
        transform: translateX(0);
      }
    }

    li {
      padding: 5px 15px 0px 25px;

      :hover {
        background: var(--default-color-hover);
      }
    }
  }
  width: 320px;

  position: relative;

  color: var(--title-color);
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;

  ${customMedia.lessThan("tablet")`
 
 width:100%;
`}

  ul {
    position: relative;
    padding: 5px 0px;
    height: 100%;

    overflow: auto;

    ::-webkit-scrollbar {
      width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px f4f4f5;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }
    li {
      position: relative;
      width: 100%;
      display: block;
      transition: 0.2s ease-out;
      padding: 5px 15px;
      cursor: pointer;
      font-size: 14px;
      max-height: 260px;

      ${customMedia.lessThan("pobre")`
       font-size:14px;       
    `}
      &.selected {
        display: none;
      }

      &.unselected {
        :hover {
          background: var(--default-color-hover);
        }
      }
      .backMenu {
        display: flex;

        align-items: center;
        width: 100%;
        gap: 10px;

        svg {
          width: 25px;
        }
      }

      img {
        max-width: 24px;
        max-height: 24px;
      }

      .ais-HierarchicalMenu-list {
        margin-top: 5px;
        padding: 5px 0px 5px 5px;
      }

      .containerTextImg {
        width: 90%;
        max-width: 90%;
        display: flex;

        .containerText {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: start;
          line-height: 25px;
          flex-wrap: wrap;

          cursor: pointer !important;
        }

        .containerImg {
          cursor: pointer !important;
          margin-right: 5px;
          width: 30px !important;
          align-items: center;
          display: flex;

          img {
            width: 30px;
          }
        }
      }

      .containerArrow {
        display: flex;

        justify-content: center;
        align-items: center;
        width: 25px;

        svg {
          color: var(--title-color);
        }
      }

      a {
        width: 100%;
        display: flex;
        color: var(--title-color);

        &.selected {
          display: none;
        }
        &.children {
          background-image: none;
        }

        ${customMedia.lessThan("pobre")`
       width:90%;
       `}

        .ais-HierarchicalMenu-count {
          display: none;
        }
      }
    }
  }
  .containerRodape {
    margin-left: 5px;
    margin-top: 50px;
    .RodapeMobile {
      display: none;

      ${customMedia.lessThan("tablet")`
    
      display:flex;
      height:30px;
      cursor:pointer;
      flex-direction:column;
			color: var(--title-color);
			li{
				display:none;
			}


    `}
    }
  }
`;

export const header = styled.div`
  padding: 10px 20px;

  .icons {
    margin-right: 10px;
  }
  .errow {
    padding-top: 10px;
    float: right;
    transform: rotate (0deg);
    transition: transform 0.5s;
  }
  .errow.dif {
    padding-top: 5px;
    float: right;
  }
  .errow:hover {
    transform: rotate(90deg);
  }
  p {
    cursor: pointer;
  }
`;

export const body = styled.div`
  padding-left: 55px;

  a {
    color: var(--title-color);
  }
  p {
    margin-bottom: 15px;
  }
`;

export const links = styled.div`
  padding-left: 20px;
  position: absolute;
  bottom: 10px;

  p {
    margin-bottom: 25px;
    color: var(--title-color);
  }
  a {
    color: var(--title-color);
    opacity: 56%;
  }
`;
