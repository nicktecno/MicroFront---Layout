import "react-toastify/dist/ReactToastify.min.css";
import HeaderComponent from "./Header";
import { useCart } from "../../Context/CartLengthContext";
import { useMenu } from "../../Context/Menu";
import { useLang } from "../../Context/LangContext";
import { useLocation } from "../../Context/Location";
import { useNotifications } from "../../Context/Notification";
import api from "../../services/api";
import defaultLayout from "../../jover";

const Header = () => {
  const { openMenu, setOpenMenu, setMenuState, menuState } = useMenu();
  const { lang, generalComponentsTranslation, setLang } = useLang();
  const logo = defaultLayout[0]["logo-img"];
  const {
    localizacao,
    localizado,
    modal,
    setModal,
    setLocalizacao,
    setLocalizado,
    removeLocation,
    AtualizarModalPagina,
    setAtualizarModalPagina,
  } = useLocation();
  const { cartLength, setCartLength } = useCart();
  const { getNotificationStatus, unreadNotifications } = useNotifications();

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const envGeo = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;
  const envMsLocation = process.env.NEXT_PUBLIC_REACT_APP_MS_LOCATION;

  return (
    <HeaderComponent
      getNotificationStatus={getNotificationStatus}
      unreadNotifications={unreadNotifications}
      envGeo={envGeo}
      envMsLocation={envMsLocation}
      mktName={mktName}
      api={api}
      cartLength={cartLength}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      generalComponentsTranslation={generalComponentsTranslation}
      lang={lang}
      setLang={setLang}
      localizacao={localizacao}
      localizado={localizado}
      modal={modal}
      setModal={setModal}
      setLocalizacao={setLocalizacao}
      setLocalizado={setLocalizado}
      removeLocation={removeLocation}
      AtualizarModalPagina={AtualizarModalPagina}
      setAtualizarModalPagina={setAtualizarModalPagina}
      setCartLength={setCartLength}
      setMenuState={setMenuState}
      menuState={menuState}
      logo={logo}
    />
  );
};

export default Header;
