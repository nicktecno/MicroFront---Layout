import React, { useEffect, useState } from "react";

import ModalGeneralLocation from "../ModalGeneralLocation";

import * as S from "./style";

import HeaderMenu from "../HeaderMenu";
import Link from "next/link";
import { useRouter } from "next/router";

import { ModalGeneralMultiLang } from "../ModalGeneralMultiLang";
import { ModalGeneralSandwichMenu } from "../ModalGeneralSandwichMenu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderComponent = ({
  api,
  openMenu,
  setOpenMenu,
  cartLength,
  lang,
  setLang,
  localizacao,
  setLocalizacao,
  localizado,
  setLocalizado,
  modal,
  setModal,
  menuState,
  setMenuState,
  removeLocation,
  AtualizarModalPagina,
  setAtualizarModalPagina,
  generalComponentsTranslation,
  setCartLength,
  mktName,
  envGeo,
  envMsLocation,
  logo,
  getNotificationStatus,
  unreadNotifications,
  timerIdSandwich,
  refButtons,
  timerId,
}) => {
  const router = useRouter();

  const [buscaSite, setBuscaSite] = useState("");
  const [modalBusca, setModalBusca] = useState(false);
  const [modalBuscaMobile, setModalBuscaMobile] = useState(false);
  const [modalMultiLangActive, setModalMultiLangActive] = useState("inactive");

  const [logged, setLogged] = useState(false);

  const [menu, setMenu] = useState([]);

  const [windowWidth, setWindowWidth] = useState("");

  const handleBusca = (e) => {
    e.preventDefault();
    document.body.style.overflow = "auto";
    setModalBuscaMobile(false);
    setModalBusca(false);

    if (buscaSite?.length === 0) {
      router.push(`/search/`);
    } else {
      setBuscaSite("");
      router.push("/search/" + buscaSite.replace(/\s/g, "+"));
    }
  };

  function fechaModal() {
    setModal(modal ? false : true);
    document.body.style.overflow = modal ? "hidden" : "auto";
    setOpenMenu(false);
  }

  async function getMenu() {
    try {
      const { data: response } = await api.get("/descendant-categories");
      setMenu(
        response.data.filter(({ name }) => {
          return name !== "Root";
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
    getNotificationStatus();
  }, [modal]);

  useEffect(() => {
    if (localStorage.getItem(`${mktName}_username`)) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [router]);

  useEffect(() => {
    getMenu();
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      {modalMultiLangActive && (
        <ModalGeneralMultiLang
          mktName={mktName}
          modalMultiLangActive={modalMultiLangActive}
          setModalMultiLangActive={setModalMultiLangActive}
          generalComponentsTranslation={generalComponentsTranslation}
          lang={lang}
          setLang={setLang}
        />
      )}

      {modal && (
        <S.modal1>
          <S.local className={modal ? "ativo" : "inativo"}>
            <S.transparente onClick={() => fechaModal()} />

            <ModalGeneralLocation
              mktName={mktName}
              api={api}
              logged={logged}
              localizado={localizado}
              modalState={modal}
              setModalState={setModal}
              localizacao={localizacao}
              setLocalizacao={setLocalizacao}
              setLocalizado={setLocalizado}
              modal={modal}
              setModal={setModal}
              removeLocation={removeLocation}
              AtualizarModalPagina={AtualizarModalPagina}
              setAtualizarModalPagina={setAtualizarModalPagina}
              generalComponentsTranslation={generalComponentsTranslation}
              setCartLength={setCartLength}
              envGeo={envGeo}
              envMsLocation={envMsLocation}
            />
          </S.local>
        </S.modal1>
      )}
      {openMenu !== false && (
        <ModalGeneralSandwichMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          menu={menu}
          timerIdSandwich={timerIdSandwich}
          generalComponentsTranslation={generalComponentsTranslation}
        />
      )}

      <S.box>
        <div className="container">
          <S.imagens>
            <div className="logoSandwich">
              <Link href="/">
                <img alt="Cielo" src={logo} id="logoDefault" />
              </Link>

              {/* desktop Menu */}
            </div>
            <S.buscas>
              {generalComponentsTranslation !== false && (
                <S.BarraPesquisa>
                  <form onSubmit={handleBusca}>
                    <input
                      onFocus={() => {
                        document.body.style.overflow = modalBuscaMobile
                          ? "auto"
                          : "hidden";
                        setModalBuscaMobile(modalBuscaMobile ? false : true);
                      }}
                      type="text"
                      value={buscaSite}
                      onChange={(e) => setBuscaSite(e.target.value)}
                      placeholder={
                        generalComponentsTranslation !== false
                          ? generalComponentsTranslation?.header.labels
                              .placeholder01
                          : ""
                      }
                    />
                  </form>
                  <S.BuscaIcon onClick={handleBusca} />
                </S.BarraPesquisa>
              )}
              <S.ContainerFunctions>
                <S.LanguageContainer
                  onClick={() => {
                    document.body.style.overflow = "hidden";
                    setModalMultiLangActive("active");
                  }}
                >
                  <S.LanguageIcon />
                  <span>
                    {generalComponentsTranslation !== false &&
                      generalComponentsTranslation?.header.labels.label01}
                  </span>
                </S.LanguageContainer>
                <S.cep
                  className={localizado ? "ativo" : ""}
                  onClick={() => {
                    document.body.style.overflow = "hidden";
                    setModal(modal ? false : true);

                    setOpenMenu(false);
                  }}
                >
                  <S.MarkerIcon />
                  <span className="localizaçao">
                    {localizado ? (
                      <>
                        {generalComponentsTranslation !== false &&
                          generalComponentsTranslation?.header.labels.label02}
                        <br />
                        {localizacao.postalcode !== undefined
                          ? localizacao.postalcode.replace(
                              /(\d{5})(\d)/,
                              "$1-$2"
                            )
                          : localizacao.postcode !== undefined
                          ? localizacao.postcode.replace(/(\d{5})(\d)/, "$1-$2")
                          : localizacao.zipcode.replace(/(\d{5})(\d)/, "$1-$2")}
                      </>
                    ) : (
                      <>
                        {generalComponentsTranslation !== false &&
                          generalComponentsTranslation?.header.labels.label03}
                        <br />
                        {generalComponentsTranslation !== false &&
                          generalComponentsTranslation?.header.labels.label04}
                      </>
                    )}
                  </span>
                </S.cep>
                <div className="flex-cart hidden-mob">
                  {parseInt(cartLength) > 0 && (
                    <Link href="/cart" passhref="true">
                      <S.cartValue>{parseInt(cartLength)}</S.cartValue>
                    </Link>
                  )}
                  <Link href="/cart" passhref="true">
                    <S.CartIconGray />
                  </Link>{" "}
                  <Link href="/cart" passhref="true">
                    <span className="Carrinho">
                      {generalComponentsTranslation !== false &&
                        generalComponentsTranslation?.header.labels
                          .label05}{" "}
                    </span>
                  </Link>
                </div>

                {logged !== false ? (
                  <div className="flex-top hidden-mob">
                    {parseInt(unreadNotifications) > 0 && (
                      <Link href="/profile">
                        <S.cartValue>
                          {parseInt(unreadNotifications)}
                        </S.cartValue>
                      </Link>
                    )}
                    <Link href="/profile" passhref="true">
                      <S.UserIcon />
                    </Link>
                    <Link href="/profile" passhref="true">
                      <span className="nomeHeader">
                        Olá!
                        <br />
                        {localStorage.getItem(`${mktName}_username`)}
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="flex-top hidden-mob">
                    <Link href="/login" passhref="true">
                      <S.UserIconGray />
                    </Link>
                    <Link href="/login" passhref="true">
                      <span className="FacaLogin">
                        {generalComponentsTranslation !== false &&
                          generalComponentsTranslation?.header.labels.label06}
                      </span>
                    </Link>
                  </div>
                )}
              </S.ContainerFunctions>
            </S.buscas>
          </S.imagens>
          <S.SecondaryHeader>
            <div className="container">
              <S.ContainerSandwich
                onClick={() => {
                  setMenuState(false);
                  setOpenMenu((prev) => !prev);
                }}
                onMouseEnter={() => {
                  setOpenMenu(false);
                  timerIdSandwich.current = window.setTimeout(() => {
                    setOpenMenu(true);
                    setMenuState(false);
                  }, "500");
                }}
                onMouseLeave={() => {
                  document.body.style.overflow = "auto";
                  window.clearTimeout(timerIdSandwich.current);
                  timerIdSandwich.current = window.setTimeout(() => {
                    setOpenMenu(false);
                  }, "150");
                }}
              >
                <S.ContainerMenuIcon>
                  <S.MenuIconGray className="imgresponsiva menu" alt="Menu" />
                </S.ContainerMenuIcon>
                <span className="menuLabel">
                  <span className="buy"> Comprar por</span> Departamentos
                </span>
              </S.ContainerSandwich>
              <HeaderMenu
                menuState={menuState}
                setMenuState={setMenuState}
                menu={menu}
                setOpenMenu={setOpenMenu}
                refButtons={refButtons}
                timerId={timerId}
                setModal={setModal}
              />
            </div>
          </S.SecondaryHeader>
          <S.locationMobile
            onClick={() => {
              document.body.style.overflow = "hidden";
              setModal(modal ? false : true);

              setOpenMenu(false);
            }}
          >
            <S.cepMobile className={localizado ? "ativo" : ""}>
              <S.MarkerIconMobile />
              <span className="localizaçao">
                {localizado ? (
                  <>
                    {generalComponentsTranslation !== false &&
                      generalComponentsTranslation?.header.labels.label09}{" "}
                    {localizacao?.city && (
                      <>
                        {localizacao.city} {" - "}{" "}
                      </>
                    )}
                    {localizacao.postalcode !== undefined
                      ? localizacao.postalcode.replace(/(\d{5})(\d)/, "$1-$2")
                      : localizacao.postcode !== undefined
                      ? localizacao.postcode.replace(/(\d{5})(\d)/, "$1-$2")
                      : localizacao.zipcode.replace(/(\d{5})(\d)/, "$1-$2")}
                  </>
                ) : (
                  <>
                    {" "}
                    {generalComponentsTranslation !== false &&
                      generalComponentsTranslation?.header.labels.label10}
                  </>
                )}
              </span>
              <S.ArrowRightIcon />
            </S.cepMobile>
          </S.locationMobile>
        </div>
      </S.box>

      <S.transparente
        style={
          modalBuscaMobile && windowWidth < 768
            ? { display: "block" }
            : { display: "none" }
        }
        className={modalBuscaMobile ? "ativo" : "inativo"}
        onClick={() => {
          document.body.style.overflow = "auto";
          setModalBuscaMobile(modalBuscaMobile ? false : true);
        }}
      />
      <S.modal2>
        <S.busca className={modalBusca ? "ativo" : "inativo"}>
          <S.transparente
            onClick={() => {
              document.body.style.overflow = "auto";
              setModalBusca(modalBusca ? false : true);
            }}
          />
        </S.busca>
      </S.modal2>

      <ToastContainer />
    </>
  );
};

export default HeaderComponent;
