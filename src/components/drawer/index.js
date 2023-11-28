import React, { useState } from "react";
import { Drawer} from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import TopDrawerAccordion from "../accordions/topdraweraccord";
// const data = [
//   {
//     name: "Home",
//   },
//   { name: "Doctors", link: "#listedDoctorsSection" },
//   { name: "Hospitals", link: "#searchDoctorsSection" },
//   { name: "Labs & Diagnostics", link: "#appointmentSection" },
//   { name: "Health Blog", link: "#paymentSection" },
// ];

const DrawerTop = () => {
  const [open, setOpen] = useState(false);
  // const getList = () => (
  //   <ul onClick={() => setOpen(false)} className="ul-top-drawer">
  //     {data.map((item, index) => (
  //       <li button key={index}>
  //         <a href={item.link}>{item.name} </a>
  //       </li>
  //     ))}
  //   </ul>
  // );
  // const btnStyle = {
  //   width: "102px",
  //   height: "36px",
  //   backgroundColor: "#1C208F",
  //   borderRadius: "4px",
  //   border: "1px solid transparent",
  //   fontFamily: "Noto Sans",
  //   fontSize: "14px",
  //   fontWeight: "400",
  //   lineHeight: "19px",
  //   textAlign: "center",
  //   textTransform: "capitalize",
  // };
  return (
    <div className="drawer-container">
      <button
        className="toggleBtn"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
      </button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
        <ul onClick={() => setOpen(false)} className="ul-top-drawer">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <TopDrawerAccordion setOpen={setOpen} />
        <ul onClick={() => setOpen(false)} className="ul-top-drawer">
          <li>
            <a href="#appointmentSection">Labs & Diagonostics</a>
          </li>
          <li>
            <a href="#paymentSection"> Health Blog</a>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default DrawerTop;
