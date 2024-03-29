import GlobalStyles from "../styles/globals";
import defaultLayout from "../jover";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { LangProvider } from "../Context/LangContext";
import { AuthProvider } from "../Context/AuthContext";
import { CartLengthProvider } from "../Context/CartLengthContext";
import { ColorThemeProvider } from "../Context/ColorTheme";
import { LocationProvider } from "../Context/Location";
import { NotificationProvider } from "../Context/Notification";
import { MenuProvider } from "../Context/Menu";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <AuthProvider>
        <NotificationProvider>
          <CartLengthProvider>
            <ColorThemeProvider>
              <LocationProvider>
                <MenuProvider>
                  <ToastContainer />
                  <GlobalStyles
                    colors={
                      process.env.NEXT_PUBLIC_REACT_APP_MMP_STATE === "true"
                        ? selectedMkt
                        : defaultLayout
                    }
                  />

                  <Header />
                  <Component {...pageProps} />
                  <Footer />
                </MenuProvider>
              </LocationProvider>
            </ColorThemeProvider>
          </CartLengthProvider>
        </NotificationProvider>
      </AuthProvider>
    </LangProvider>
  );
}

export default MyApp;
