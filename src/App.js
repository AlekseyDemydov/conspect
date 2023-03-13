import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Layout from "./comp/Layout/Layout";

import { AppBarHtml } from "./comp/AppBarHtml/AppBarHtml";
import { P11 } from "./comp/pages/Html/module1 les1/P11";
import { P12 } from "./comp/pages/Html/module1 les1/P12";
import { P13 } from "./comp/pages/Html/module1 les1/P13";
import { P14 } from "./comp/pages/Html/module1 les1/P14";
import { P15 } from "./comp/pages/Html/module1 les1/P15";
import { P16 } from "./comp/pages/Html/module1 les1/P16";
import { P17 } from "comp/pages/Html/module1 les1/P17";
import { P18 } from "comp/pages/Html/module1 les1/P18";
import { P19 } from "comp/pages/Html/module1 les1/P19";
import { P110 } from "comp/pages/Html/module1 les1/P110";



import { P21 } from "comp/pages/Html/module1 les2/P21";
import { P22 } from "./comp/pages/Html/module1 les2/P22.jsx";
import { P23 } from "./comp/pages/Html/module1 les2/P23";

import { AppBarJs } from "./comp/AppBarHtml/AppBarJs";
import { JsUr1 } from "./comp/pages/Js/module1/JsUr1";
import { JsUr2 } from "./comp/pages/Js/module1/JsUr2";
import { JsUr3 } from "./comp/pages/Js/module1/JsUr3";
import { P24 } from "comp/pages/Html/module1 les2/P24";



export const App = () => {
 


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="html" element={<AppBarHtml />}>
            <Route path="1-1" element={<P11/>} />
            <Route path="1-2" element={<P12/>} />
            <Route path="1-3" element={<P13/>} />
            <Route path="1-4" element={<P14/>} />
            <Route path="1-5" element={<P15/>} />
            <Route path="1-6" element={<P16/>} />
            <Route path="1-7" element={<P17/>} />
            <Route path="1-8" element={<P18/>} />
            <Route path="1-9" element={<P19/>} />
            <Route path="1-10" element={<P110/>} />

            <Route path="2-1" element={<P21/>} />
            <Route path="2-2" element={<P22 />} />
            <Route path="2-3" element={<P23 />} />
            <Route path="2-4" element={<P24 />} />
          </Route>
          <Route path="js" element={<AppBarJs />}>
            <Route path="1-1" element={<JsUr1 />} />
            <Route path="1-2" element={<JsUr2 />} />
            <Route path="1-3" element={<JsUr3 />} />

            {/* <Route path="2-1" element={<Tabl />} />
            <Route path="2-2" element={<RazmStr />} />
            <Route path="2-3" element={<HtmlDoc />} /> */}
          </Route>
          {/* <Route path="react" element={<AppBarHtml />}>
            <Route path="1-1" element={<WebTech />} />
            <Route path="1-2" element={<Tags />} />
            <Route path="1-3" element={<HtmlDoc />} />

            <Route path="2-1" element={<Tabl />} />
            <Route path="2-2" element={<RazmStr />} />
            <Route path="2-3" element={<HtmlDoc />} />
          </Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
