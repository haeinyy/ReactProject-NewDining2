/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import moment from "moment";
import MyModal from './components/MyModal';

import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import MDButton from "components/MDButton";

// Data
import Calendar from "layouts/mainmenu/components/Calendar"
import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavbar";
import Menu from './components/Menu';
import { useNavigate } from 'react-router-dom';

function MainMenu(props) {
  const [clickDate, setClickDate] = useState(null);
  const [value, onChange] = useState(new Date());
  
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
      setOpen(true);
  };

  const handleClickSubmit = (input) => {
    console.log(input.input);
    if (input.input === '1234') {
        navigate('/dietMonth');
    } else {
        setOpen(false);
    }
}
const handleClickCancel = () => setOpen(false);

  const adminButton = {
    // display: "flex",
    // justifyContent: "flex-end",
    float: "right",
  };

  const navigate = useNavigate();
  
  return (
    <div>
      <ShinsegaeNavbar />
      <MDBox py={2}>
        <Calendar setData={setClickDate}></Calendar>
      </MDBox>
      <MDBox py={1.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={3}>
            <MDBox MDBox ml={3} mr={3} mb={1.5} pt={1}>
              <Menu
                // date={ moment(value).format("YYYYMMDD") }
                date={ clickDate===null?moment(value).format("YYYYMMDD"):clickDate }
              />
            </MDBox>
          </Grid>
          
        </Grid>
        <MDButton style={adminButton} color="error" onClick={handleClick}>관리자</MDButton>
        <MyModal isOpen={isOpen} onSubmit={handleClickSubmit} onCancel={handleClickCancel}/>
      </MDBox>
      <Footer />
    </div>
  );
}

export default MainMenu;
