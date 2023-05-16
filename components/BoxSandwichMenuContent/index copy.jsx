import React, { useState } from "react";

import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";

import * as S from "./style";
import { useRouter } from "next/router";

const BoxSandwichMenuContent = ({ menu, setOpenMenu }) => {
  const [subMenu, setSubMenu] = useState(false);

  const history = useRouter();

  function redirect(url) {
    window.location.href = url;
  }

  return (
    <>
      <S.menu>
        <ul>
          {menu &&
            menu.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => {
                    if (item.name === "Root") {
                      subMenu === false && setOpenMenu(false);
                      subMenu !== false ? setSubMenu(false) : history.push("/");
                    } else {
                      if (subMenu === item.id) {
                        setSubMenu(false);
                      } else {
                        setSubMenu(item.id);
                      }
                    }
                  }}
                  key={index}
                  className={
                    subMenu === false
                      ? item.name === "Root"
                        ? "unselected"
                        : "unselected"
                      : item.name === "Root"
                      ? "unselected"
                      : "selected"
                  }
                >
                  {item.name === "Root" ? (
                    <a>
                      {subMenu !== false ? (
                        <div className="backMenu">
                          <ArrowIosBackOutline />
                          Menu Principal
                        </div>
                      ) : (
                        Início
                      )}
                    </a>
                  ) : (
                    <a className={subMenu !== false ? "selected" : ""}>
                      <div className="containerTextImg">
                        <div className="containerImg">
                          {item.image_url && (
                            <img src={item.image_url} alt={item.name} />
                          )}
                        </div>
                        <div className="containerText">{item.name}</div>
                      </div>
                      <div className="containerArrow">
                        <ArrowIosForwardOutline />
                      </div>
                    </a>
                  )}
                </li>
                {subMenu === item.id && (
                  <ul className="children">
                    <li>
                      <a
                        className="children"
                        onClick={() => {
                          setOpenMenu(false);

                          redirect(
                            `/category/${item.name.replace(/\s/g, "+")}`
                          );
                        }}
                      >
                        <div className="containerTextImg">
                          <div className="containerText strong">
                            Ver {item.name}
                          </div>
                        </div>
                      </a>
                    </li>
                    {item.children.map((children, i) => (
                      <li key={i}>
                        <a
                          className="children"
                          onClick={() => {
                            setOpenMenu(false);

                            redirect(
                              `/category/${item.name.replace(
                                /\s/g,
                                "+"
                              )}/${item.name.replace(
                                /\s/g,
                                "+"
                              )}+>+${children.name.replace(/\s/g, "+")}`
                            );
                          }}
                        >
                          <div className="containerTextImg">
                            <div className="containerImg">
                              {item.image_url && (
                                <>
                                  {children.image_url !== null && (
                                    <img
                                      src={children.image_url}
                                      alt={children.name}
                                    />
                                  )}
                                </>
                              )}
                            </div>
                            <div className="containerText strong">
                              {children.name}
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </ul>
      </S.menu>
    </>
  );
};

export default BoxSandwichMenuContent;
