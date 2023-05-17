import styled from "styled-components";
import { generateMedia } from "styled-media-query";

import { Marker } from "@styled-icons/foundation/Marker";
import { Home } from "@styled-icons/fluentui-system-regular/Home";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";

import { QuestionCircle } from "@styled-icons/fluentui-system-filled/QuestionCircle";
import { Menu } from "@styled-icons/entypo/Menu";
import { Cart } from "@styled-icons/ionicons-sharp/Cart";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { ArrowRight } from "@styled-icons/typicons/ArrowRight";
import { Language } from "@styled-icons/material/Language";
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

export const ArrowRightIcon = styled(ArrowRight)`
  color: var(--header-secondary-font-color);
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin-right: 0px;
  cursor: pointer;
  position: absolute;
  right: 25px;

  ${customMedia.lessThan("480px")` 
  right:15px;
  `}
`;

export const BuscaIcon = styled(Search)`
  color: var(--header-font-color);
  height: 25px;
  width: 25px;
  min-width: 25px;
  margin-right: 0px;
  cursor: pointer;
  ${customMedia.lessThan("tablet")` 
    color: var(--header-font-color);
      height: 22px;
      width: 22px;
      min-width: 22px;
  `}
`;

export const BuscaIconGray = styled(Search)`
  color: var(--header-font-color);
  height: 30px;
  width: 30px;
  margin-right: 0px;
  margin-left: 10px;
`;

export const HomeIcon = styled(Home)`
  height: 30px;
  width: 30px;
  margin-right: 0px;
  color: var(--header-font-color);
`;

export const HomeIconGray = styled(Home)`
  color: var(--header-font-color);
  height: 30px;
  width: 30px;
  margin-right: 0px;
`;

export const UserIcon = styled(UserCircle)`
  color: var(--header-font-color);
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin-left: 10px;
`;

export const UserIconGray = styled(UserCircle)`
  color: var(--header-font-color);
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin-right: 0px;
  margin-left: 10px;
`;

export const InfoIcon = styled(QuestionCircle)`
  height: 30px;
  width: 30px;
  margin-right: 0px;
  color: var(--header-font-color);
`;

export const InfoIconGray = styled(QuestionCircle)`
  color: var(--header-font-color);
  height: 30px;
  width: 30px;
  margin-right: 0px;
`;

export const MenuIcon = styled(Menu)`
  height: 40px;
  width: 40px;
  margin-right: 0px;
  color: var(--header-secondary-font-color);
`;

export const MenuIconGray = styled(Menu)`
  color: var(--header-secondary-font-color);
  margin-left: 10%;
  height: 30px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
`;

export const CartIcon = styled(Cart)`
  height: 30px;
  width: 30px;
  margin-right: 0;
  color: var(--header-font-color);
`;

export const CartIconGray = styled(Cart)`
  color: var(--header-font-color);
  height: 30px;
  width: 30px;
  margin-right: 0px;
  margin-left: 10px;

  ${customMedia.lessThan("notebook")`
      margin-left:0px;
    `}
`;

export const MarkerIcon = styled(Marker)`
  height: 30px;
  width: 30px;
  margin-right: 0px;
  color: var(--header-font-color);
  ${customMedia.lessThan("notebook")`
      margin-left:-10px;
    `}
`;

export const LanguageIcon = styled(Language)`
  height: 30px;
  width: 30px;
  margin-right: 0px;
  color: var(--header-font-color);
  ${customMedia.lessThan("notebook")`
      margin-left:-10px;
    `}
`;

export const MarkerIconMobile = styled(Marker)`
  height: 21px;
  width: 21px;
  margin-right: 5px;
  color: var(--header-secondary-font-color);
  margin-left: 15px;
  margin-top: 5px;
`;

export const cartValue = styled.div`
  background-color: var(--default-color-icons);
  color: #292728;
  font-weight: bold;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -33px;
  margin-left: 30px;
  ${customMedia.lessThan("notebook")`
      margin-left:20px;
    `}
`;

export const ContainerMenuIcon = styled.div`
  display: flex;
  width: 40px;
`;

export const atentionMsg = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  height: 28px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: #000000;
  padding: 5px 0;
  color: #e7e7e7;
  strong {
    color: var(--default-color-icons);
  }

  ${customMedia.lessThan("notebook")`
  font-size: 8px;
`}
  ${customMedia.lessThan("tablet")`
 
  font-size: 6px;
`}
`;
export const box = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--header-color);
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;

  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: initial;
  box-shadow: 0px 5px 10px #0000001f;

  .container {
    display: flex;
    align-items: center;

    max-width: 1920px;
    width: 100%;
    margin: 0 12%;
    padding: 0px;
    ${customMedia.lessThan("1366px")`
      margin:0 5%;
  `}

    ${customMedia.lessThan("tablet")`
      margin:0 10px;
  `}
  }
  ${customMedia.lessThan("notebook")`
      height:60px;
  `}
`;

export const imagens = styled.div`
  display: flex;
  width: 100%;

  align-items: center;

  .logoSandwich {
    display: flex;
    align-items: center !important;
    margin: 0 10px 0 0;
    gap: 10px;
  }

  img {
    opacity: 1;
    transition: 0.3s;
    &.ml-none {
      margin-left: 0;
    }
  }

  img:hover {
    opacity: 0.8;
  }

  #logoDefault {
    width: 150px;

    :hover {
      cursor: pointer;
    }
  }

  .menu {
    height: auto;
    width: 35px;
    cursor: pointer;
    margin: 10px 10px 10px 10px;
  }

  ${customMedia.lessThan("notebook")`
      .menu{
        display: block;
      }  
      #logoRicardoEletro{
        width: 200px;
      }
    `}

  ${customMedia.lessThan("tablet")`
      justify-content: space-around;
      margin-left:0px;
      .menu{
        display:none;
        }
         #logoRicardoEletro{
					width: 135px;
				}
    `}
  ${customMedia.lessThan("tablet")`
      justify-content: space-between;
  `}
`;

export const buscas = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  color: var(--header-font-color);
  height: 27px;
  .FacaLogin {
    font-size: 12px;
    color: var(--header-font-color);
    margin-left: 5px;
  }

  .Carrinho {
    font-size: 12px;
    margin-left: 0px;
    color: var(--header-font-color);
  }
  .localizaçao {
    font-size: 12px;
    line-height: 14px;
    box-sizing: border-box;
  }
  .nomeHeader {
    margin-left: 5px;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    max-width: 130px;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--header-font-color);
    ${customMedia.lessThan("1300px")` 
      display: none;
    `}
  }
  a {
    padding: 0;
  }

  ${customMedia.lessThan("desktop")`
    .FacaLogin{
      display:none;
    }
    .Carrinho{
      display: none;
    }

    .localizaçao{
      display: none !important;
    }
    
    .nomeHeader{
      display:none;
    }  
  `}

  ${customMedia.lessThan("tablet")`
    .perfil, .ajuda, .carrinho{
      display: none;
    }
    width:100%;
    margin-left: 0px;
  `}

  .pesquisar {
    display: none;
    margin-right: 2.2%;

    ${customMedia.lessThan("mobile")`
    display: flex;
    `}
  }
`;

export const ContainerFunctions = styled.div`
  display: flex;
`;

export const BarraPesquisa = styled.div`
  display: flex;
  height: 40px;
  flex: 1;
  padding: 0 10px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(136 136 129 / 42%) 0px 2px 4px;

  button {
    padding: 0;
    background: unset;
    border: none;
  }
  form {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #f4f4f5;
  }

  input {
    background-color: transparent;
    color: var(--font-color);
    border: 0;
    width: 100%;
  }

  input::placeholder {
    color: var(--font-color);
    font-weight: 400;
  }

  ${customMedia.lessThan("desktop")`
       width: 270px;
    `}

  ${customMedia.lessThan("tablet")`
      width: 100%;
      button{
        height:30px;
        width: 30px;
        min-width:30px;
        background-color: var(--font-color);
      }
  `}

  ${customMedia.lessThan("480px")`
    width:100%;
    margin-right:0;
    padding:0 4px;
  `}

  ${customMedia.lessThan("375px")`
    input {
      font-size:13px;
    }
    input::placeholder {
      font-size:13px;
    }
  `}
  ${customMedia.lessThan("340px")`
      input {
        font-size:12px;
      }
      input::placeholder {
        font-size:12px;
      }
  `}
`;

export const promocoes = styled.div`
  display: flex;
  align-items: center;
  display: none;
  img {
    width: 30px;
    margin-right: 20px;

    ${customMedia.lessThan("notebook")`
      margin-right:0px;
    `}

    ${customMedia.lessThan("netbook")`
      display:none;
    `}
  }

  div {
    font-weight: 500;
    ${customMedia.lessThan("notebook")`
      display:none;
    `}
  }
`;

export const perfil = styled.div`
  display: flex;
  flex: 1 1;
  ${customMedia.lessThan("tablet")`
    display: none;
  `}
`;

export const carrinho = styled.div`
  display: flex;
  flex: 1 1;

  ${customMedia.lessThan("tablet")`
    display: none;
  `}
`;

export const cep = styled.div`
  width: 130px;
  display: flex;
  flex: 1 1;
  white-space: nowrap;
  margin-left: 10px;
  cursor: pointer;
  svg {
    color: var(--header-font-color);
  }
  &.ativo {
    svg {
      color: var(--header-font-color);
    }
  }

  ${customMedia.lessThan("desktop")`
      width: 30px;
  `}

  ${customMedia.lessThan("tablet")`
    display: none;
  `}

  span {
    ${customMedia.lessThan("mobile")`
        display: none;
    `}
  }
`;

export const LanguageContainer = styled.div`
  width: 130px;
  display: flex;
  flex: 1 1;
  align-items: center;
  white-space: nowrap;
  margin-left: 25px;
  cursor: pointer;

  span {
    margin-left: 5px;
  }
  svg {
    color: var(--header-font-color);
  }
  &.ativo {
    svg {
      color: var(--header-font-color);
    }
  }

  ${customMedia.lessThan("desktop")`
      width: 30px;
  `}

  ${customMedia.lessThan("tablet")`
    display: none;
  `}

  span {
    ${customMedia.lessThan("desktop")`
        display: none;
    `}
  }
`;

export const cepMobile = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  flex: 1 1;
  white-space: nowrap;
  margin-left: 0px;
  cursor: pointer;

  span {
    margin-top: 7px;
    color: var(--header-secondary-font-color);
  }

  ${customMedia.lessThan("mobile")`
      margin-right:0px;
    `}

  ${customMedia.lessThan("375px")`
    span {
      font-size:13px;
      }
  `}
  ${customMedia.lessThan("340px")`  
    span {
      font-size:12px;
    }
  `}
`;

// menu de LOCALIZAÇÃO //

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
  .escorrida {
    display: none;
  }
  .peluda {
    display: block;
  }
`;

export const transparente = styled.div`
  @supports (backdrop-filter: opacity(1)) {
    .no-support {
      display: none;
    }
  }
  width: 100%;
  height: 100vh;
  margin-top: 90px !important;
  z-index: 99;
  backdrop-filter: blur(6px) contrast(0.8) !important ;
  @supports (backdrop-filter: opacity(1)) {
    &.no-support {
      margin-top: 90px;
      width: 100%;
      height: 1000vh;
      z-index: 0;
      background: #0000006c;
    }
  }
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px) contrast(0.8) !important ;
  @-moz-document url-prefix() {
    background-color: #0000006c;
  }

  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;

  &.ativo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
`;
export const conteudo = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 20px;
  font-size: 14px;
  color: #fff;

  span {
    font-size: 20px;
    position: absolute;
    right: 40px;
    font-weight: 700;
    cursor: pointer;
  }

  button {
    width: 305px;
    height: 50px;
    background-color: #ce171f;
    border-radius: 20px;
    border: none;
    margin-top: 50px;

    img {
      margin-right: 10px;
      position: relative;
    }
  }

  p {
    margin: 20px 0;
  }

  form input {
    width: 207px;
    height: 41px;
    border-radius: 20px;
    border: none;
    text-align: center;
    color: #ababab;
  }
  form button {
    background-color: #292728;
    background-image: url("/images/enviar.png");
    width: 25px;
    height: 25px;
    position: relative;
    right: 35px;
    margin-top: 0px;
  }
`;

// menu de BUSCA //
export const modal2 = styled.div`
  .inativo {
    display: none;
  }
  .ativo {
    display: block;
  }
`;
export const busca = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 90;
  display: none;
`;
export const buscando = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 30px;
  display: flex;
  z-index: 100;
  justify-content: center;
  ${customMedia.lessThan("mobile")`
       flex-direction:column;
    `}

  .containerGeral {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .containerBusca {
    background: #ffffff;
    display: flex;
    width: 400px;
    justify-content: center;
    align-items: center;
    align-content: center;

    ${customMedia.lessThan("mobile")`
       width:95%;
    `}
  }
  input,
  button {
    outline: none !important;
  }
  button {
    padding-bottom: 10px !important;
  }

  form input {
    width: 305px;
    height: 48px;
    border: none;
    padding-left: 40px;
    font-size: 18px;
    ${customMedia.lessThan("ipobre")`
      width:260px;
      padding-left:20px;
      font-size: 14px;
    `}
  }

  .buttonEnviar {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none !important;
    border: 0px;
    padding: 10px !important;
    width: 100%;
    transition: 0.3s;
    cursor: pointer;
    color: var(--header-font-color);
    font-size: 16px;

    ${customMedia.lessThan("mobile")`
       width:95%;
    `}
  }

  .apagar {
    color: #000;
    font-size: 20px;
    background-color: #0000;
    border: none;

    :focus {
      background-color: #0000;
      border: none;
    }
  }

  .voltar {
    background-image: url("/images/voltar.png");
    background-size: cover;
    background-color: #ffffff;
    width: 50px;
    height: 45px;
    border: none;
    margin-right: 10px;
    ${customMedia.lessThan("mobile")`
      align-self:center;
      margin-bottom:5px;
    `}
  }
`;

export const alingLoader = styled.div`
  img {
    width: 34px !important;
    left: 0px !important;
  }
`;
// menu de BUSCA //

export const SecondaryHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 60px;
  left: 0px;
  background-color: var(--header-secondary-color);
  position: fixed;
  border-bottom: 1px solid var(--header-color);

  z-index: 10;
  font-weight: 550;
  ${customMedia.lessThan("tablet")` 
   display:none;
  `}

  .container {
    margin: 0 12%;

    ${customMedia.lessThan("1366px")`
      margin:0 5%;
  `}
  }
  .menuLabel {
    text-transform: uppercase;
    margin-right: 10px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    color: var(--header-secondary-font-color);
    ${customMedia.lessThan("1280px")`
    margin-right: 0px;
    span{
      display:none;
    }
    
    `}
    ${customMedia.lessThan("1100px")`
    
  
      display:none;
    
    
    `}
    cursor: pointer;
  }
`;

export const ContainerSandwich = styled.div`
  display: flex;
  width: max-content;
  justify-content: flex-start;
  margin-right: 20px;

  .buy {
    display: flex;
    width: max-content;
    margin-right: 3px;
  }
  span {
    display: flex;
  }
`;

export const locationMobile = styled.div`
  width: 100%;
  height: 30px;
  display: none;
  top: 60px;
  left: 0px;
  background-color: var(--header-secondary-color);
  position: fixed;
  border-bottom: 1px solid var(--default-color-hover);
  z-index: 10;
  ${customMedia.lessThan("tablet")` 
    display: flex;
  `}
`;
