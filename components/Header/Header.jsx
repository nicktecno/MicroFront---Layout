import React, { useEffect, useState } from "react";
import defaultLayout from "../../jover.json";
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
          return name;
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
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

  function handleModal() {
    if (openMenu) {
      document.body.style.overflow = "auto";
      setOpenMenu(false);
    } else {
      document.body.style.overflow = "hidden";
      setOpenMenu(true);
    }
  }

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
            />
          </S.local>
        </S.modal1>
      )}

      <ModalGeneralSandwichMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        menu={menu}
        generalComponentsTranslation={generalComponentsTranslation}
      />

      <S.box>
        <S.imagens>
          <div className="logoSandwich">
            <Link
              onClick={() => {
                router.push("/");
              }}
              href="/"
              passhref="true"
            >
              <img
                alt="Cielo"
                src={Object.values(defaultLayout)[0][0]["logo-img"]}
                id="logoDefault"
              />
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
                        ? localizacao.postalcode.replace(/(\d{5})(\d)/, "$1-$2")
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
                    {" "}
                    {generalComponentsTranslation !== false &&
                      generalComponentsTranslation?.header.labels.label05}{" "}
                  </span>
                </Link>{" "}
              </div>
              {logged !== false ? (
                <div className="flex-top hidden-mob">
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
          <S.MenuIconGray
            onClick={() => {
              setMenuState(false);
              handleModal();
            }}
            className="imgresponsiva menu"
            alt="Menu"
          />
          <span
            className="menuLabel"
            onClick={() => {
              setMenuState(false);

              setOpenMenu(openMenu ? false : true);
            }}
          >
            <span>
              {" "}
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.header.labels.label07}
            </span>{" "}
            {generalComponentsTranslation !== false &&
              generalComponentsTranslation?.header.labels.label08}
          </span>
          <HeaderMenu
            menu={menu}
            menuState={menuState}
            setMenuState={setMenuState}
            setModal={setModal}
          />
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
            <S.ArrowRight />
          </S.cepMobile>
        </S.locationMobile>
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
          ></S.transparente>
        </S.busca>
      </S.modal2>

      <ToastContainer />
    </>
  );
};

export default HeaderComponent;
