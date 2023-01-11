import React, { useState } from "react";

// componentes boostrap

// componentes boostrap

import * as S from "./styles";

import Link from "next/link";
import { ModalFooterTalkToUs } from "../ModalFooterTalkToUs";

const FooterSellerSpecs = ({
  generalComponentsTranslation,
  footerMktData,
  appUrl,
}) => {
  const [modalTalkActive, setModalTalkActive] = useState("inactive");

  return (
    <>
      {" "}
      <ModalFooterTalkToUs
        modalTalkActive={modalTalkActive}
        setModalTalkActive={setModalTalkActive}
      />
      <S.footerRed>
        <S.ContainerLine1>
          <S.Column1>
            <h2>{footerMktData.nameComplete}</h2>
            <p>
              {footerMktData.address}
              <br />
              {footerMktData.postalCode}
              <br />
              {footerMktData.cnpj}
              <br />
            </p>
            <a href="https://seller.cazco.digital/register" target="_new">
              <span
                style={{
                  color: "var(--footer-text-color)",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {generalComponentsTranslation !== false &&
                  generalComponentsTranslation?.footer.labels.label02}{" "}
                {footerMktData.name}
              </span>
            </a>
          </S.Column1>
          <S.Column2>
            <h2>
              {" "}
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label03}
            </h2>
            <p>{footerMktData.email}</p>{" "}
            <div className="talkToUsBox">
              <a
                className="talkUs"
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setModalTalkActive("active");
                }}
              >
                {generalComponentsTranslation !== false &&
                  generalComponentsTranslation?.footer.labels.label04}
              </a>{" "}
            </div>
          </S.Column2>
          <S.Column3>
            <h2>
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label05}
            </h2>
            <Link href="/contact">
              <div>
                {generalComponentsTranslation !== false &&
                  generalComponentsTranslation?.footer.labels.label06}
              </div>
            </Link>

            <a rel="noreferrer" href="/content/termos-de-uso" target="_blank">
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label07}
            </a>

            <a rel="noreferrer" href="/content/termos-de-uso" target="_blank">
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label08}
            </a>

            <a href="/content/politica-de-privacidade" target="_blank">
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label09}
            </a>

            <a href="/content/cookies" target="_blank">
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label10}
            </a>
          </S.Column3>
          <S.Column4>
            <h2>
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label11}
            </h2>
            <div>
              <a rel="noreferrer" href={footerMktData.facebook} target="_blank">
                <S.FaceIcon />
              </a>
              <a
                rel="noreferrer"
                href={footerMktData.instagram}
                target="_blank"
              >
                <S.InstaIcon />
              </a>
            </div>
          </S.Column4>
        </S.ContainerLine1>
        <S.ContainerLine2>
          <section>
            <h2>
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label12}
            </h2>
            <div>
              <p>
                {generalComponentsTranslation !== false &&
                  generalComponentsTranslation?.footer.labels.label13}
              </p>

              <img
                className="flags"
                src="/images/flags.png"
                alt="paymentFlags"
              />
            </div>
          </section>

          <section className="stamps">
            <h2>
              {generalComponentsTranslation !== false &&
                generalComponentsTranslation?.footer.labels.label14}
            </h2>
            <div className="containerStamps">
              <img src="/images/iconCrypto.png" alt="icon" />
              <a
                href={`https://transparencyreport.google.com/safe-browsing/search?url=${appUrl}&hl=pt_BR`}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/googleStamp.png" alt="icon" />
              </a>
            </div>
          </section>
        </S.ContainerLine2>
      </S.footerRed>
    </>
  );
};

export default FooterSellerSpecs;
