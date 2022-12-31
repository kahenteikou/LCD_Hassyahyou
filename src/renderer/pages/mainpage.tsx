import React from "react";
import LCDContent from "renderer/content/LCDContent";
import MainPageCSS from "./mainpage.module.css";

const MainPage=()=>{
    return(
            <div id="wrapper">
                <div id="content">
                    <LCDContent/>
                </div>
            </div>
    );
}
export default MainPage;