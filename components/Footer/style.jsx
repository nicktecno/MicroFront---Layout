import styled from "styled-components";
import { generateMedia } from "styled-media-query";

import { Home } from "@styled-icons/fluentui-system-regular/Home";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { QuestionCircle } from "@styled-icons/fluentui-system-filled/QuestionCircle";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import { Cart } from "@styled-icons/ionicons-sharp/Cart";
import { GlobeOutline } from "@styled-icons/evaicons-outline/GlobeOutline";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { AddToQueue } from "@styled-icons/boxicons-regular/AddToQueue";
import { Trash } from "@styled-icons/ionicons-solid/Trash";
import { Language } from "@styled-icons/material/Language";

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

export const LanguageIcon = styled(Language)`
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer;
  color: var(--title-color);
`;

export const EditIcon = styled(Edit)`
  color: var(--title-color);
  height: 25px;
  width: 25px;

  margin: -5px 10px 0px 10px;
  cursor: pointer;
`;

export const AddIcon = styled(AddToQueue)`
  color: var(--title-color);
  height: 25px;
  width: 25px;
  margin-left: 20px;
  margin-top: -5px;
  cursor: pointer;
`;

export const DeleteIcon = styled(Trash)`
  color: var(--title-color);
  height: 25px;
  width: 25px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer;
`;

export const GlobeIcon = styled(GlobeOutline)`
  color: var(--title-color);
  height: 14px;
  width: 14px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const LinkedInIcon = styled(Linkedin)`
  color: white;
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
  cursor: pointer !important;
`;

export const HomeIconGray = styled(Home)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer !important;
`;

export const UserIcon = styled(UserCircle)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer !important;
`;

export const UserIconGray = styled(UserCircle)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer !important;
`;

export const InfoIcon = styled(QuestionCircle)`
  color: var(--title-color);
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

export const MenuIcon = styled(MenuOutline)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
`;

export const MenuIconGray = styled(MenuOutline)`
  color: var(--title-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  margin-top: -5px;
  cursor: pointer;

  :hover {
    color: var(--default-color-hover);
  }
`;

export const CartIcon = styled(Cart)`
  color: var(--title-color);
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
  background-color: #fff;
  color: #292728;
  width: 18px;
  height: 18px;
  font-weight: bold;
  border-radius: 9px;
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -13px;
  margin-left: 17px;
`;

export const box = styled.div`
  display: none;

  ${customMedia.lessThan("netbook")`
        display: block;
        width: 100%;
        height: 80px;
        background-color: var(--default-color);
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 0;
        right: 0;
        top: initial;
        box-shadow: 0px -10px 10px #0000001f;
       

        .modal-footer{
            justify-content: initial;
        }
    `}
`;

export const imagens = styled.div`
  height: 80px;
  border-radius: 50px 50px 0px 0px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .red {
    color: #fff;

    ${customMedia.lessThan("ipobre")`
          display:none;
        `}
  }
`;

export const modal1 = styled.div`
  .inativo {
    display: none;
  }
  .ativo {
    display: block;
  }
`;

export const local = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
`;

export const cazco = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(72, 77, 85);
  padding: 10px 0px;
  color: rgb(255, 255, 255);
  font-size: 11px;
  display: ${(props) => (props.routeWithSpace ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 0px;
  z-index: 99;
  a {
    color: #fff;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #ccc;
    }
  }

  img {
    margin: 0 5px;
    margin-top: -2px;
  }

  ${customMedia.lessThan("netbook")`
        position: relative;
        bottom: 30px;
        z-index: 1;
    `}

  ${customMedia.lessThan("503px")`
        position: relative;
        margin-top:-65px;

    `}
`;

export const espaco = styled.div`
  background-color: rgb(255, 255, 255);
  height: 8px;
  width: 2px;
  display: inline-block;
  margin: 0px 10px;
`;
export const transparente = styled.div`
  ${customMedia.lessThan("netbook")`
  @supports (backdrop-filter: opacity(1)) {
    .no-support {
      display: none;
    }
  }
  margin-top: 90px;
  width: 100%;
  height: 1000vh;
  z-index: 0;
  backdrop-filter: blur(6px) contrast(0.8) !important ;
  @-moz-document url-prefix() {
    background-color: #0000006c;
  }
  `}
`;
export const ContainerFooterSpecs = styled.div`
  display: ${(props) => (props.routeWithSpace ? "none" : "flex")};
  width: 100%;
`;
