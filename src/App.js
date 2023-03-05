import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Layout from "./comp/Layout/Layout";

import { AppBarHtml } from "./comp/AppBarHtml/AppBarHtml";
import { P1 } from "./comp/pages/Html/module1 les1/P1";
import { P2 } from "./comp/pages/Html/module1 les1/P2";
import { P3 } from "./comp/pages/Html/module1 les1/P3";
import { P4 } from "./comp/pages/Html/module1 les1/P4";


import { HtmlM1L2Ur1 } from "./comp/pages/Html/module2 les2/HtmlM1L2Ur1";
import { HtmlM1L2Ur2 } from "./comp/pages/Html/module2 les2/HtmlM1L2Ur2";
import { HtmlM1L2Ur3 } from "./comp/pages/Html/module2 les2/HtmlM1L2Ur3";

import { AppBarJs } from "./comp/AppBarHtml/AppBarJs";
import { JsUr1 } from "./comp/pages/Js/module1/JsUr1";
import { JsUr2 } from "./comp/pages/Js/module1/JsUr2";
import { JsUr3 } from "./comp/pages/Js/module1/JsUr3";
import { P5 } from "./comp/pages/Html/module1 les1/P5";
import { P6 } from "./comp/pages/Html/module1 les1/P6";



export const App = () => {
 


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="html" element={<AppBarHtml />}>
            <Route path="1-1" element={<P1/>} />
            <Route path="1-2" element={<P2/>} />
            <Route path="1-3" element={<P3/>} />
            <Route path="1-4" element={<P4/>} />
            <Route path="1-5" element={<P5/>} />
            <Route path="1-6" element={<P6/>} />

            <Route path="2-1" element={<HtmlM1L2Ur1 />} />
            <Route path="2-2" element={<HtmlM1L2Ur2 />} />
            <Route path="2-3" element={<HtmlM1L2Ur3 />} />
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
