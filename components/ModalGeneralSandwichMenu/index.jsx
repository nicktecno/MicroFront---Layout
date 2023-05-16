import { useEffect } from "react";
import BoxSandwichMenuContent from "../BoxSandwichMenuContent";

import * as S from "./styles";

export function ModalGeneralSandwichMenu({
  openMenu,
  setOpenMenu,
  menu,
  timerIdSandwich,
}) {
  useEffect(() => {
    if (openMenu === true) {
      document.body.style.overflow = "hidden";
    }
  }, [openMenu]);
  return (
    <>
      {openMenu && (
        <S.Modal
          className={"active"}
          onMouseOverCapture={() => {
            document.body.style.overflow = "hidden";
            window.clearTimeout(timerIdSandwich.current);
            setOpenMenu(true);
          }}
        >
          <S.Transparente
            onMouseOverCapture={() => {
              document.body.style.overflow = "auto";

              setOpenMenu(false);
            }}
          />

          <S.centerModal>
            <div className="modalTitle">
              <S.closeButton
                onClick={() => {
                  document.body.style.overflow = "auto";

                  setOpenMenu(false);
                }}
              >
                x
              </S.closeButton>
            </div>
            <S.ContainerBox>
              <BoxSandwichMenuContent menu={menu} setOpenMenu={setOpenMenu} />
            </S.ContainerBox>
          </S.centerModal>
        </S.Modal>
      )}
    </>
  );
}
