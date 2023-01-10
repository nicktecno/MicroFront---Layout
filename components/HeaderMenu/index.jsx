import { useState } from "react";

import * as S from "./style";

const HeaderMenu = ({ menu, menuState, setMenuState, setModal }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const menuFiltered = menu.filter((filt) => filt.name !== "Root").slice(0, 4);

  const handleClick = (itemId) => {
    setMenuState(selectedItem[0]?.id === itemId && menuState ? false : true);
    setModal(false);
    const InDisplayItem = menuFiltered.filter(({ id }) => {
      return id === itemId;
    });
    setSelectedItem(InDisplayItem);
  };

  function redirect(url) {
    window.location.href = url;
  }

  return (
    <>
      <S.menu>
        {menuFiltered &&
          menuFiltered.map((item, index) => {
            return (
              <div
                style={{
                  textDecoration:
                    selectedItem[0]?.name === item?.name && menuState
                      ? "underline"
                      : "unset",
                }}
                key={index}
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                {item?.name.toUpperCase()}
              </div>
            );
          })}
      </S.menu>
      {menuState && (
        <S.background onClick={() => setMenuState(false)}>
          <S.modal>
            <S.screen>
              <S.category>
                <h2
                  onClick={() =>
                    redirect(
                      `/category/${selectedItem[0].name.replace(/\s/g, "-")}`
                    )
                  }
                >
                  Confira tudo para {selectedItem[0]?.name.toUpperCase()}
                </h2>
                <div>
                  <section>
                    {selectedItem[0]?.children?.map((i, index) => {
                      return (
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
                      );
                    })}
                  </section>
                </div>
              </S.category>
            </S.screen>
          </S.modal>
        </S.background>
      )}
    </>
  );
};
export default HeaderMenu;
