import { height } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { makeDiet } from "../redux/menu";

function DateSelector(props) {
    // console.log("props", props.course.course);
    // console.log("props", props.date.tempDate);
    const dispatch = useDispatch();
    const menu_style = {
        backgroundColor: "#D70C19",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        padding: "2px",
        height: "35px",
    };
    const font = {
        fontSize: "15px",
    };
    const button_style = {
        marginLeft: "15px",
        backgroundColor: "black",
        color: "white",
        width: "60px",
    };
    const viewMonth = props.date.tempDate.slice(4, 6);
    const viewDate = props.date.tempDate.slice(6, 8);
    return (
        <div style={menu_style}>
            {/* <div>{props.course.course}</div> */}
            <div>
                {viewMonth + "/" + viewDate + " "}
                {props.course.course}
            </div>
            <button
                style={button_style}
                onClick={() =>
                    dispatch(
                        makeDiet({
                            date: props.date.tempDate,
                            course: props.course.course,
                        })
                    )
                }
            >
                완료
            </button>
        </div>
    );
}

export default DateSelector;
