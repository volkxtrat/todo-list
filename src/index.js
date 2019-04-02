import React from "react";
import ReactDOM from "react-dom";

import "./lib/custom-reset.css";
import "./index.scss";
import "./scss/variable.scss";
import "./scss/global.scss";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import mainTheme from "./theme/MUI/MUIMain";

import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import moment from "moment";
import "moment/locale/ru";

import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_ru from "react-intl/locale-data/ru";
import messages_ru from "./translations/ru.json";
import messages_en from "./translations/en.json";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

// redux DevTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// redux Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const theme = mainTheme;

addLocaleData([...locale_en, ...locale_ru]);
const messages = {
  ru: messages_ru,
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

// app
const app = (
  <Provider store={store}>
    <IntlProvider
      locale={language}
      messages={messages[language]}
      defaultLocale="en"
    >
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        locale={language}
        moment={moment}
      >
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </IntlProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
