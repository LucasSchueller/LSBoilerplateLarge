import i18n from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import config from "./config";
import Home from "./pages/Home";

const Page = (props: { pageID: string; children: React.ReactElement }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (i18n.exists(`pageTitles.${props.pageID}`)) {
      document.title = `${config.projectName} | ${t(
        `pageTitles.${props.pageID}`
      )}`;
    } else {
      document.title = `${config.projectName} | ${t(`pages.${props.pageID}`)}`;
    }
  }, [t, props.pageID]);

  return props.children;
};

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page pageID="index">
            <Home />
          </Page>
        }
      />
      <Route
        path="403"
        element={<Link to="https://codepen.io/rafaelavlucas/full/NWWQNjZ" />}
      />
      <Route
        path="404"
        element={<Link to="https://codepen.io/rafaelavlucas/full/NWWQNjZ" />}
      />
      <Route
        path="*"
        element={<Link to="https://codepen.io/rafaelavlucas/full/NWWQNjZ" />}
      />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
