import { useEffect, useRef, useState } from "react";

import { useLocation } from "../../Context/Location";

import * as S from "./style";

import Link from "next/link";
import { useMenu } from "../../Context/Menu";

const HeaderMenu = ({ menu, setOpenMenu, menuState, setMenuState }) => {
  const { setModal } = useLocation();
  const [selectedItem, setSelectedItem] = useState([]);
  const [indexMenu, setIndexMenu] = useState(false);

  const refButtons = useRef([]);
  const timerId = useRef(null);

  const handleHover = (itemId) => {
    setModal(false);
    const InDisplayItem = menu?.slice(0, 4).filter(({ id }) => {
      return id === itemId;
    });
    setSelectedItem(InDisplayItem);

    const filterIndex = menu
      ?.slice(0, 4)
      .map((item, index) => {
        if (item.id === InDisplayItem[0].id) {
          return index;
        } else {
          return [];
        }
      })
      .flat()[0];
    setIndexMenu(filterIndex);
    setMenuState((prev) =>
      InDisplayItem[0]?.id === itemId && prev ? false : true
    );
  };

  const handleClickRedirect = (itemId) => {
    setModal(false);
    const InDisplayItem = menu?.slice(0, 4).filter(({ id }) => {
      return id === itemId;
    });
    redirect(`/category/${InDisplayItem[0].name.replace(/\s/g, "+")}`);
  };

  useEffect(() => {
    menu?.slice(0, 4);
  }, []);

  function redirect(url) {
    window.location.href = url;
  }

  return (
    <>
      <S.menu>
        {menu &&
          menu?.slice(0, 4).map((item, index) => {
            return (
              <div
                ref={(ref) => (refButtons.current[index] = ref)}
                style={{
                  textDecoration:
                    selectedItem[0]?.name === item?.name && menuState
                      ? "underline"
                      : "unset",
                  textTransform: "uppercase",
                }}
                key={index}
                onClick={() => handleClickRedirect(item.id)}
                onMouseOverCapture={() => {
                  document.body.style.overflow = "auto";
                  setOpenMenu(false);
                  timerId.current = window.setTimeout(
                    () => handleHover(item.id),
                    "500"
                  );
                }}
                onMouseLeave={() => {
                  window.clearTimeout(timerId.current);
                }}
              >
                {item?.name}
              </div>
            );
          })}
      </S.menu>

      {menuState && (
        <S.background>
          <S.ModalNameCategory
            onMouseLeave={() => {
              setMenuState(false);
            }}
            onClick={() =>
              redirect(`/category/${selectedItem[0].name.replace(/\s/g, "+")}`)
            }
            onMouseEnter={() => setMenuState(true)}
            style={{
              left: `${
                refButtons.current.filter(
                  (refName) => refName.firstChild.data === selectedItem[0].name
                )[0].offsetLeft
              }px`,
            }}
          >
            {selectedItem[0].name}
          </S.ModalNameCategory>
          <S.modal
            onMouseEnter={() => setMenuState(true)}
            onMouseLeave={() => {
              setMenuState(false);
            }}
            style={{
              left: `${
                refButtons.current.filter(
                  (refName) => refName.firstChild.data === selectedItem[0].name
                )[0].offsetLeft
              }px`,
            }}
            marginLeftIndex0={indexMenu === 0 ? true : false}
            marginLeftIndex1={indexMenu === 1 ? true : false}
            marginLeftIndex2={indexMenu === 2 ? true : false}
            marginLeftIndex3={indexMenu === 3 ? true : false}
            color={selectedItem[0].color}
          >
            <S.screen>
              <S.category>
                {selectedItem[0].children?.map(
                  (i, index) =>
                    index <= 6 && (
                      <h4
                        key={index}
                        onClick={() =>
                          redirect(
                            `/category/${selectedItem[0].name.replace(
                              /\s/g,
                              "+"
                            )}/${selectedItem[0].name.replace(
                              /\s/g,
                              "+"
                            )}+>+${i.name.replace(/\s/g, "+")}`
                          )
                        }
                      >
                        {i.name}
                      </h4>
                    )
                )}
              </S.category>
              <S.category>
                {selectedItem[0].children?.map(
                  (i, index) =>
                    index > 6 &&
                    index <= 12 && (
                      <h4
                        key={index}
                        onClick={() =>
                          redirect(
                            `/category/${selectedItem[0].name.replace(
                              /\s/g,
                              "+"
                            )}/${selectedItem[0].name.replace(
                              /\s/g,
                              "+"
                            )}+>+${i.name.replace(/\s/g, "+")}`
                          )
                        }
                      >
                        {i.name}
                      </h4>
                    )
                )}
                {selectedItem[0].children.length > 12 && (
                  <S.SeeMore
                    onClick={() =>
                      redirect(
                        `/category/${selectedItem[0].name.replace(/\s/g, "+")}`
                      )
                    }
                    color={selectedItem[0].color}
                  >
                    + {selectedItem[0].name}
                  </S.SeeMore>
                )}
              </S.category>
              <Link
                href={
                  selectedItem[0].redirect_url_image !== null &&
                  selectedItem[0].redirect_url_image !== undefined
                    ? selectedItem[0].redirect_url_image
                    : `/category/${selectedItem[0].name.replace(/\s/g, "+")}`
                }
              >
                <S.ContainerPromotion>
                  <img
                    src={
                      selectedItem[0].url_image !== null &&
                      selectedItem[0].url_image !== undefined
                        ? selectedItem[0].url_image
                        : "/images/logo.png"
                    }
                    alt={
                      selectedItem[0].meta_description !== undefined &&
                      selectedItem[0].meta_description !== null
                        ? selectedItem[0].meta_description
                        : "promoções"
                    }
                  />
                </S.ContainerPromotion>
              </Link>
            </S.screen>
          </S.modal>
        </S.background>
      )}
    </>
  );
};
export default HeaderMenu;
