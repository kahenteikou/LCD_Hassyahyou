import React from "react";
import LCDContent from "renderer/content/LCDContent";
import MainPageCSS from "./mainpage.module.css";

const MainPage=()=>{
    return(
            <div className={MainPageCSS.wrapper}>
                <div className={MainPageCSS.content}>
                    <LCDContent/>
                </div>
            </div>
    );
}
export default MainPage;