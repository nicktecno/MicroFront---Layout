import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import ColorPicker from "../ColorPicker";

import * as S from "./style";

import FooterSellerSpecs from "../FooterSellerSpecs";

import { ModalGeneralMultiLang } from "../ModalGeneralMultiLang";
import { ModalGeneralSandwichMenu } from "../ModalGeneralSandwichMenu";

import "react-toastify/dist/ReactToastify.css";

const FooterComponent = ({
  generalComponentsTranslation,
  colorThemes,
  PostColorThemes,
  chooseMktOption,
  selectedMkt,
  openMenu,
  setOpenMenu,
  cartLength,
  lang,
  setLang,
  footerMktData,
  mktName,
  appUrl,
  api,
}) => {
  const [modalMultiLangActive, setModalMultiLangActive] = useState("inactive");

  const handleClose = () => setOpenMenu(false);
  const handleShow = () => setOpenMenu(true);
  const [logged, setLogged] = useState(false);
  const [menu, setMenu] = useState([]);
  const [routeWithSpace, setRouteWithSpace] = useState(false);
  const [colorPicker, setColorPicker] = useState({
    state: false,
    type: "none",
  });
  const router = useRouter();

  const [selectedSchema, setSelectedSchema] = useState(
    colorThemes !== null && colorThemes !== undefined
      ? Object.keys(colorThemes)
      : false
  );

  const [themeName, setThemeName] = useState();
  async function getMenu() {
    try {
      const { data: response } = await api.get("/descendant-categories");

      setMenu(response.data);
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  useEffect(() => {
    getMenu();
    if (localStorage.getItem(mktName)) {
      setLogged(true);
    } else {
      setLogged(false);
    }

    if (typeof window !== "undefined") {
      setThemeName(localStorage?.getItem("theme") || "defaultLayout");
    }

    if (typeof window !== "undefined") {
      setThemeName(localStorage?.getItem("theme") || "defaultLayout");
    }

    if (typeof window !== "undefined") {
      setThemeName(localStorage?.getItem("theme") || "defaultLayout");
    }
    routeFilter();
  }, [router]);

  function routeFilter() {
    if (
      router.pathname.includes("/cart") ||
      router.pathname.includes("/tcart") ||
      router.pathname.includes("/sellerproduct") ||
      router.pathname.includes("/search") ||
      router.pathname.includes("/category") ||
      router.pathname.includes("/findpromoters") ||
      router.pathname.includes("/seemore") ||
      router.pathname.includes("/inspire") ||
      router.pathname.includes("/product") ||
      router.pathname.includes("/seemore") ||
      router.pathname.includes("/profile/wishlist") ||
      router.pathname.includes("/publiclist")
    ) {
      if (router.pathname.includes("/offers")) {
        setRouteWithSpace(false);
      } else {
        setRouteWithSpace(true);
      }
    } else {
      setRouteWithSpace(false);
    }
  }

  useEffect(() => {
    setSelectedSchema(
      colorThemes !== undefined && colorThemes !== null
        ? Object.keys(colorThemes)
        : false
    );
  }, [selectedMkt, colorThemes]);
  return (
    <>
      <ModalGeneralMultiLang
        modalMultiLangActive={modalMultiLangActive}
        setModalMultiLangActive={setModalMultiLangActive}
        generalComponentsTranslation={generalComponentsTranslation}
        lang={lang}
        setLang={setLang}
        mktName={mktName}
      />
      {openMenu &&
        generalComponentsTranslation !== false &&
        generalComponentsTranslation !== undefined &&
        menu.length > 0 && (
          <ModalGeneralSandwichMenu
            setOpenMenu={setOpenMenu}
            menu={menu}
            generalComponentsTranslation={generalComponentsTranslation}
          />
        )}

      <S.box>
        <S.imagens>
          <S.MenuIconGray onClick={openMenu ? handleClose : handleShow} />
          <a href="/" passhref="true">
            {router !== null && router.pathname === "/" ? (
              <>
                <S.HomeIcon />
              </>
            ) : (
              <S.HomeIconGray />
            )}
          </a>

          <Link href="/cart" passhref="true">
            {parseInt(cartLength) > 0 && (
              <S.cartValue>{parseInt(cartLength)}</S.cartValue>
            )}
            <S.CartIcon />
          </Link>
          <a onClick={() => setModalMultiLangActive("active")}>
            <S.LanguageIcon />
          </a>
          {logged !== false ? (
            <Link href="/profile" passhref="true">
              <S.UserIcon />
            </Link>
          ) : (
            <Link href="/login" passhref="true">
              <S.UserIconGray />
            </Link>
          )}
        </S.imagens>
      </S.box>
      <S.ContainerFooterSpecs routeWithSpace={routeWithSpace}>
        <FooterSellerSpecs
          appUrl={appUrl}
          footerMktData={footerMktData}
          generalComponentsTranslation={generalComponentsTranslation}
        />
      </S.ContainerFooterSpecs>
      <S.cazco routeWithSpace={routeWithSpace}>
        {process.env.NEXT_PUBLIC_REACT_APP_MMP_STATE === "true" && (
          <>
            <select
              defaultValue={themeName}
              onChange={(e) => {
                chooseMktOption(e.target.value);
                setThemeName(e.target.value);
              }}
            >
              {selectedSchema?.map((name) => {
                return (
                  <option value={name} key={name}>
                    {name}
                  </option>
                );
              })}
            </select>

            <S.AddIcon
              onClick={() => setColorPicker({ state: true, type: "add" })}
            />
            <S.EditIcon
              onClick={() => setColorPicker({ state: true, type: "edit" })}
            />
            <S.DeleteIcon
              onClick={() => setColorPicker({ state: true, type: "delete" })}
            />
            <S.espaco />
          </>
        )}
        {generalComponentsTranslation !== false &&
          generalComponentsTranslation?.footer.labels.label01}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/company/cazco/about/"
          target="_blank"
        >
          <img
            alt="Cazco"
            src="/images/cazco.png"
            className="cazco"
            passhref="true"
          />
        </a>
        <S.espaco />
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/company/cazco/about/"
          target="_blank"
        >
          <S.LinkedInIcon />
        </a>
      </S.cazco>
      <S.modal1>
        <S.local className={colorPicker.state ? "ativo" : "inativo"}>
          <S.transparente
            onClick={() => setColorPicker(colorPicker.state ? false : true)}
          />

          <ColorPicker
            modalState={setColorPicker}
            themeData={colorPicker}
            themeName={themeName}
            colorThemes={colorThemes}
            PostColorThemes={PostColorThemes}
            selectedMkt={selectedMkt}
          />
        </S.local>
      </S.modal1>
    </>
  );
};

export default FooterComponent;
