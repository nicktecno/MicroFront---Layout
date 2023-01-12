import "react-toastify/dist/ReactToastify.min.css";

import FooterComponent from "./Footer";
import { useCart } from "../../Context/CartLengthContext";
import { useMenu } from "../../Context/Menu";
import { useColorTheme } from "../../Context/ColorTheme";
import { useLang } from "../../Context/LangContext";
import api from "../../services/api";

const Footer = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const { lang, generalComponentsTranslation, setLang } = useLang();
  const { colorThemes, chooseMktOption, selectedMkt, PostColorThemes } =
    useColorTheme();
  const { cartLength } = useCart();

  const footerMktData = {
    nameComplete: "Ricardo Eletro - Nordeste Participações SA",
    address: "Rua Irma Gabriela, 51 - Sl 224 Parte IV",
    postalCode: "Cep 04.571-130",
    cnpj: "10.331.096/0001-24",
    name: "Ricardo Eletro",
    email: "sac@ricardoeletro.com.br",
    facebook: "https://google.com",
    instagram: "https://google.com",
  };

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const appUrl = process.env.NEXT_PUBLIC_REACT_APP_URL;

  return (
    <FooterComponent
      appUrl={appUrl}
      mktName={mktName}
      cartLength={cartLength}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      colorThemes={colorThemes}
      chooseMktOption={chooseMktOption}
      selectedMkt={selectedMkt}
      PostColorThemes={PostColorThemes}
      generalComponentsTranslation={generalComponentsTranslation}
      lang={lang}
      setLang={setLang}
      footerMktData={footerMktData}
      api={api}
    />
  );
};

export default Footer;
