import React from "react";
import jsPDF from "jspdf";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Grid from "@mui/material/Grid";
import "./Temp1Pv.css";
import { useSelector } from "react-redux";
function Temp1Pv() {
  const preview = useSelector((state) => state.temp1);
  console.log(preview);
  function generatePDF() {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#page"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  }

  return (
    <>
      <div id="page">
        <div className="left">
          <h1 className="name">
            {preview.firstName} {preview.lastName}
          </h1>
          <h5 className="objective">career Objective</h5>
          <p className="objective-des">{preview.objective}</p>
          <h5 className=" uc section">expreience</h5>
          <div className="p-2">
            <p>{preview.orgName}</p>
            <p>{preview.jobStartDt} - 
            {preview.jobEndDt}</p>
          </div>
          <div>
          <p>
            worked as a {preview.jobTitle}
          </p>
          </div>
          <h5 className=" uc section">education</h5>
          <p>
            studied {preview.eduTitle} {preview.degree} in {preview.university}
          </p>
          <p>
            from {preview.eduStartDt} to {preview.eduEndDt}
          </p>
        </div>
        <div className="right">
          <h5 className=" uc section">personal inf</h5>
          <p><LocalPhoneIcon />phone No: {preview.phoneNo}</p>
          <p>Email: {preview.email}</p>
          <p>address: {preview.address}</p>
          <p>city: {preview.city}</p>
          <p>state: {preview.state}</p>
          <p>pincode: {preview.pincode}</p>

          <h5 className=" uc section">skills</h5>
          <ul>
            <li>{preview.skill1}</li>
            <li>{preview.skill2}</li>
            <li>{preview.skill3}</li>
            <li>{preview.skill4}</li>
          </ul>
        </div>
      </div>

      <button onClick={generatePDF} type="primary">
        pdf
      </button>
    </>
  );
}

export default Temp1Pv;
