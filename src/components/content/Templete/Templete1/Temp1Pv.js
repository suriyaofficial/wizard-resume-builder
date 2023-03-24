import React from "react";
import jsPDF from "jspdf";
import Grid from "@mui/material/Grid";
import "./Temp1Pv.css";
import { useSelector } from "react-redux";
function Temp1Pv() {
  const preview = useSelector((state) => state.temp1);
  console.log(preview);
  function generatePDF() {
    var doc = new jsPDF("p", "pt","a4");
    doc.html(document.querySelector("#page"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  }

  return (
    <>
      <div id="page">
        <h1>
          {preview.firstName} {preview.lastName}
        </h1>
        <h1>career Objective</h1>
        <p>{preview.objective}</p>
        <h1>expreience</h1>
        <p>
          worked in {preview.orgName} as {preview.jobTitle}
        </p>
        <p>
          {preview.jobStartDt}
          {preview.jobEndDt}
        </p>
        <h1>education</h1>
        <p>
          studied {preview.eduTitle} {preview.degree} in {preview.university}
        </p>
        <p>
          from {preview.eduStartDt} to {preview.eduEndDt}
        </p>

        <h1>personal info</h1>
        <p>phone No: {preview.phoneNo}</p>
        <p>Email: {preview.email}</p>
        <p>address: {preview.address}</p>
        <p>city: {preview.city}</p>
        <p>state: {preview.state}</p>
        <p>pincode: {preview.pincode}</p>

        <h1>skills</h1>
        <ul>
          <li>{preview.skill1}</li>
          <li>{preview.skill2}</li>
          <li>{preview.skill3}</li>
          <li>{preview.skill4}</li>
        </ul>
      </div>

      <button onClick={generatePDF} type="primary">
        pdf
      </button>
    </>
  );
}

export default Temp1Pv;
