import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import charminar from "../../images/charminar.png";
import bangalore from "../../images/bangalore.png";
import chennai from "../../images/chennai.png";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="serviceTitile">
        <h1>At your service</h1>
        <div className="logo">
          <div className="circle"></div>
          <div className="rectangle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="serviceLocationSection">
        <div className="locationIcon">
          <img
            src="https://s3-alpha-sig.figma.com/img/fe81/65bb/868062aa91cba1267af40bd7793ea331?Expires=1702857600&Signature=B3QfURpgJmse5vdzEzb9kntXkxYyvznEb6NH73-eGS8bp4NinsFk2RRH~nPi0-1IIy2-Ruh0JEtR6W5MAy8k5DnAGkBIDP2HJtCev0bbGaZJTp8CCVXIQTa4T5tooaHO8TQDszEFy6Wtmm5niOmMOlWc9lTP4NrN7Y~q2CYZrFT9FRAAgYvnnlms8Jve6CRlxoJoquABhHjuvzrp5pNN3niDd2YONi55PRbu2hefeJW2hHheh8Tg~uaYKf-PIv6gjNTBqdUwTY8-z9DoVW8HFWBY640kiYTF80dQ8fUHmHztKH4XNGWAGphucrYsoAniu11ysu1L4WbiI76W2oHAnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Computer man"
          />
        </div>
        <div className="bgColor"></div>

        <div className="cardSection">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="image">
                  <img src={charminar} alt="charminar" />
                </div>
                <div className="container">
                  <h4>Hyderabad</h4>
                  <p>01, Complex Road</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="image">
                  {" "}
                  <img src={bangalore} alt="bangalore" />
                </div>
                <div className="container">
                  <h4>Bangalore</h4>
                  <p>(Available Soon)</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="image">
                  <img src={chennai} alt="chennai" />
                </div>
                <div className="container">
                  <h4>Chennai</h4>
                  <p>(Available Soon)</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Contact;
