import styled from "styled-components";
import { generateMedia } from "styled-media-query";

import { Home } from "@styled-icons/fluentui-system-regular/Home";
import { User } from "@styled-icons/boxicons-regular/User";
import { QuestionCircle } from "@styled-icons/fluentui-system-filled/QuestionCircle";
import { Menu4 } from "@styled-icons/remix-fill/Menu4";
import { Cart } from "@styled-icons/boxicons-regular/Cart";
import { GlobeOutline } from "@styled-icons/evaicons-outline/GlobeOutline";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const GlobeIcon = styled(GlobeOutline)`
  color: var(--title-color);
  height: 14px;
  width: 14px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const LinkedInIcon = styled(Linkedin)`
  color: var(--title-color);
  height: 18px;
  width: 18px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const HomeIcon = styled(Home)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const HomeIconGray = styled(Home)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const UserIcon = styled(User)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const UserIconGray = styled(User)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const InfoIcon = styled(QuestionCircle)`
  color: #ce171f;
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const InfoIconGray = styled(QuestionCircle)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const MenuIcon = styled(Menu4)`
  color: #ce171f;
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer;
`;

export const MenuIconGray = styled(Menu4)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer;
`;

export const CartIcon = styled(Cart)`
  color: #ce171f;
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const CartIconGray = styled(Cart)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const cartValue = styled.div`
  background-color: #ce171f;
  color: var(--title-color);
  width: 18px;
  height: 18px;
  border-radius: 9px;
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  margin-left: 15px;
`;

export const box = styled.div`
  display: none;

  ${customMedia.lessThan("tablet")`
        display: block;
        width: 100%;
        height: 80px;
        background-color: #000000;
        position: fixed;
        z-index: 8;
        bottom: 0;
        left: 0;
        right: 0;
        top: initial;
        box-shadow: -1px -1px 10px #fff;

        .modal-footer{
            justify-content: initial;
        }
    `}
`;

export const imagens = styled.div`
  height: 80px;
  border-radius: 50px 50px 0px 0px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .red {
    color: var(--title-color);
  }
`;

export const cazco = styled.div`
  width: 100%;
  background-color: rgb(72, 77, 85);
  padding: 10px 0px;
  color: rgb(255, 255, 255);
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 0px;

  a {
    color: var(--title-color);
    margin: 0 5px;
    display: inline-block;

    &:hover {
    }
  }

  img {
    margin: 0 5px;
    margin-top: -2px;
  }

  ${customMedia.lessThan("tablet")`
          position: relative;
          padding-bottom: 45px;

      `}
`;
export const espaco = styled.div`
  background-color: rgb(255, 255, 255);
  height: 8px;
  width: 2px;
  display: inline-block;
  margin: 0px 10px;
`;

export const footerRed = styled.footer`
  background-color: var(--footer-background-color);
  margin-top: 200px;
  color: var(--footer-text-color);
  padding: 30px 10px 40px 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  width: 100%;
  max-width: 100%;
  position: relative;
  bottom: 0px;
  flex-direction: column;
  ${customMedia.lessThan("tablet")`
    margin-top: 100px;
   
    margin-bottom: 30px;
 `}
  ${customMedia.lessThan("500px")`
    margin-bottom: 85px;
 `}
  ${customMedia.lessThan("450px")`
    padding-left: 15px;
    margin-top: 20px;
 `}

 .talkToUsBox {
    margin-bottom: 30px;
  }
  .talkUs {
    cursor: pointer;
    font-size: 18px;
    text-decoration: underline;
    font-weight: 500;
    ${customMedia.lessThan("tablet")`
      margin-bottom: 30px;
    `}
  }
  .container {
    display: flex;
  }
  h2 {
    color: var(--footer-title-color);
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: bold;
  }
  h4 {
    font-size: 15px;
    font-weight: bold;
    color: var(--footer-text-color);
  }
  p {
    font-size: 13px;
  }
  a {
    color: var(--footer-text-color);
    font-size: 12px;
    line-height: 25px;
    :hover {
      color: var(--footer-text-color-hover);
    }
  }

  ${customMedia.lessThan("tablet")`
padding-bottom:110px;
        top: 0px;

	.container {
		flex-direction: column;
		div{
			max-width: 100%;
		}
    `}
`;

export const redes = styled.div`
  width: 100%;

  text-align: start;

  div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 30px;
    padding: 10px;
  }

  ${customMedia.lessThan("tablet")`
        
       
				position: relative;
				left: 0;
				text-align: start;
				div{
					justify-content: start;
				}
    `}
`;

export const FaceIcon = styled(FacebookSquare)`
  color: var(--footer-text-color);
  height: 30px;
  width: 30px;
  margin-right: 0px;
  margin-top: -5px;
  transition: 0.3s;
  :hover {
    color: var(--title-color);
  }
`;
export const InstaIcon = styled(Instagram)`
  color: var(--footer-text-color);
  height: 30px;
  width: 30px;
  margin-right: 0px;
  margin-top: -5px;
  transition: 0.3s;

  :hover {
    color: var(--title-color);
  }
`;

export const ContainerLine1 = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  position: relative;
  max-width: 1920px;
  gap: 20px;

  ${customMedia.lessThan("tablet")`
	flex-direction:column;
  

	`}
`;

export const Column1 = styled.div`
  display: flex;
  width: 260px;
  flex-direction: column;
`;

export const Column2 = styled.div`
  display: flex;
  width: 190px;
  flex-direction: column;
`;
export const Column3 = styled.div`
  display: flex;
  width: 180px;
  gap: 5px;
  flex-direction: column;
`;
export const Column4 = styled.div`
  display: flex;
  width: 180px;
  flex-direction: column;
`;

export const ContainerLine2 = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  max-width: 1280px;
  gap: 20px;
  position: relative;
  margin-top: 20px;

  ${customMedia.lessThan("tablet")`
	flex-direction:column;
  

	`}

  section {
    max-width: 650px;
    display: flex;
    flex-direction: column;

    &.stamps {
      .containerStamps {
        width: 30%;
        display: flex;
        gap: 10px;
        img {
          width: auto;
          max-width: 200px;
        }
      }
    }
  }

  img {
    width: auto;
    max-width: 50px;
    max-height: 50px;
  }
  .flags {
    width: 100%;
    max-width: 400px;
    max-height: 100%;
  }
  ${customMedia.lessThan("tablet")`
	flex-direction: column;
  section{
    width: 80%;
  }

	`}
  ${customMedia.lessThan("mobile")`

	gap: 30px;
	`}
`;
