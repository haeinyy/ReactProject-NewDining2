import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
// import logo from "C:/shinEdu/project2022/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png";
// import logo from "/Users/chang/develop/react/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png";
import logo from "../../../../src/assets/images/icons/flags/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Index(props) {
    const box = {
        backgroundColor: "#D70C19",
        height: "50px",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
    };
    const logo_style = {
        height: "30px",
    };
    // const logo = require("react/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png");
    // const logo = require("/Users/chang/develop/react/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png");
    
    const navigate = useNavigate();
    const location = useLocation();
    const [loc, setLoc] = useState("");

    useEffect(() => {
        console.log(location.pathname);
        setLoc(location.pathname);
    },[location]);

    const goHome = () => {
        if (loc === "/changmin") {
            navigate(-1);
        } else {
            navigate("/mainmenu");
        }
    };

    return (
        <div style={box}>
            <div onClick={goHome}>신세계 아이앤씨</div>
            <img src={logo} alt="logo" style={logo_style}></img>
        </div>
    );
}

export default Index;
