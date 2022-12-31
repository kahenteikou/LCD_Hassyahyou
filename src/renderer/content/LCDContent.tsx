import React from "react";
import LCDContentCSS from "./LCDContent.module.css";
import LCD_C2 from "./LCD_C2";
const LCDContent=()=>{
    return(
            <div className={LCDContentCSS.TOPLCDDiv}>
                <div className={LCDContentCSS.BansenNum}>
                    5
                </div>
                <div className={LCDContentCSS.CTBox}>
                    <LCD_C2/>
                </div>
            </div>
    );
}
export default LCDContent;