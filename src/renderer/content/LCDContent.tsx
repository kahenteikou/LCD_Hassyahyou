import React from "react";
import LCDContentCSS from "./LCDContent.module.css";
const LCDContent=()=>{
    return(
            <div className={LCDContentCSS.TOPLCDDiv}>
                <div className={LCDContentCSS.BansenNum}>
                    5
                </div>
            </div>
    );
}
export default LCDContent;