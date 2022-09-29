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

import MDBox from "components/MDBox";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavbar";
import DateSelector from "./components/dateSelector";
import SearchBar from "./components/searchBar";
import styled from "styled-components";
import Diet from "./components/Diet";
import DietEdit from "./components/DietEdit";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useLocation } from "react-router";

const top_title = {
    color: "white",
    backgroundColor: "#D70C19",
    display: "flex",
    justifyContent: "center",
};
const white_background = {
    backgroundColor: "white",
};

function EditDiet() {
    const { state } = useLocation();
    console.log(state);
    return (
        <Provider store={store}>
            <div style={white_background}>
                <ShinsegaeNavbar />
                <div style={top_title}>식단표 만들기</div>
                <DateSelector course={state.course} date={state.tempDate} />
                <SearchBar />
                {/* <SearchResult> */}
                {/* <Diet /> */}
                {/* <DietEdit /> */}
                {/* </SearchResult> */}
                {/* <Link to="/dashbaord">Expenses</Link> */}
            </div>
        </Provider>
    );
}
const BlankBlock = styled.div`
    background-color: white;
    height: 200px;
    color: white;
`;
const SearchResult = styled.div`
    display: flex;
`;
export default EditDiet;
