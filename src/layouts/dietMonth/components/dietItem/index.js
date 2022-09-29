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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DietItem({ isShow, tempDate, course, mainMenu, sub1, sub2, sub3, sub4, sub5, dessert }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const navigate = useNavigate();


    const onClickEditButton = () => {
        // TODO : 창민님 페이지 경로로 변경해야 함 + 전달하는 날짜 형식 체크 필요
        navigate("/changmin", {
            state: {
                tempDate: { tempDate },
                course: { course },
            },
        });
    };

    return (
        <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor={darkMode ? "transparent" : "grey-100"}
            borderRadius="lg"
            p={3}
            mt={2}
        >
          {/* {tempDate} */}
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {course}
            {isShow === "true"?
            <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={onClickEditButton}>
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>:
            <div></div>
            }
          </MDTypography>

        </MDBox>
    );
}

// Typechecking props for the Bill
// DietItem.propTypes = {
//   course: PropTypes.string.isRequired,
//   mainMenu: PropTypes.string.isRequired,
//   sub1: PropTypes.string.isRequired,
//   sub2: PropTypes.string.isRequired,
//   sub3: PropTypes.string.isRequired,
//   sub4: PropTypes.string.isRequired,
//   sub5: PropTypes.string.isRequired,
//   dessert: PropTypes.string.isRequired
// };

export default DietItem;
