import * as S from "./styles";

export function ModalGeneralMultiLang({
  modalMultiLangActive,
  setModalMultiLangActive,
  generalComponentsTranslation,
  lang,
  setLang,
  mktName,
}) {
  function handleLanguage(language) {
    localStorage.setItem(`${mktName}_language`, language);
    setLang(language);
  }

  return (
    <S.Modal className={modalMultiLangActive}>
      <S.Transparente
        onClick={() => {
          document.body.style.overflow = "auto";

          setModalMultiLangActive("inactive");
        }}
      />

      <S.centerModal>
        <div className="modalTitle">
          <span className="title">
            {generalComponentsTranslation !== false &&
              generalComponentsTranslation?.header.labels.labelModal01}
          </span>
          <S.closeButton
            onClick={() => {
              document.body.style.overflow = "auto";

              setModalMultiLangActive("inactive");
            }}
          >
            x
          </S.closeButton>
        </div>
        <S.ContainerInputs>
          <div className="containerFlags">
            {generalComponentsTranslation !== false &&
              generalComponentsTranslation?.header.labels.languagesPack.map(
                (langSelect) => (
                  <div
                    key={langSelect.slug}
                    onClick={() => handleLanguage(langSelect.slug)}
                    className={
                      lang === langSelect.slug ? "boxFlag active" : "boxFlag"
                    }
                  >
                    <div className="containerImage">
                      <img src={langSelect.image} alt={langSelect.alt} />
                    </div>
                    <div className="dataFlag">{langSelect.name}</div>
                  </div>
                )
              )}
          </div>
        </S.ContainerInputs>
      </S.centerModal>
    </S.Modal>
  );
}
