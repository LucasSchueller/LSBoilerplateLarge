//Import React Components
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";

//Import Styling and Fonts
import "./scss/index.scss";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

//Import Components
import App from "./pages/App";

//Import Config
import Config from "./config";

//Import and Initalize Translation
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import "./typescript/i18n";

const Page = (props: { pageID: string; children: JSX.Element; }) => {
    const { t } = useTranslation();

    useEffect(() => {
        if(i18n.exists(`pageTitles.${props.pageID}`)){
            document.title = "LSBoilerplateLarge | " + t(`pageTitles.${props.pageID}`);
        }else{
            document.title = "LSBoilerplateLarge | " + t(`pages.${props.pageID}`);
        }
    }, [t]);

    return props.children;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Page pageID="error404"><App/></Page>} />

                <Route path="/" element={<Page pageID="index"><App /></Page>} />

                <Route path="403" element={<Page pageID="error403"><Link to={"https://codepen.io/rafaelavlucas/full/NWWQNjZ"}/></Page>} />
                <Route path="404" element={<Page pageID="error404"><Link to={"https://codepen.io/rafaelavlucas/full/NWWQNjZ"}/></Page>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);