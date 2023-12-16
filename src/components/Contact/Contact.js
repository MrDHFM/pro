import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import charminar from "../../images/charminar.png";
import bangalore from "../../images/bangalore.png";
import chennai from "../../images/chennai.png";
import clarityFormLine from "../../images/clarity_form-line.png";

import "./Contact.css";
import Footer from "../Footer/Footer";

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
      <div className="recSection">
        <div>Heading</div>
        {/* <div className="x">
          <div className="firstLine">
            <div className="rect1">
              <img src={clarityFormLine} />
              <p>
                Join us by filling the form and our experts will reach out for
                onboarding process
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="600"
              height="121"
              viewBox="0 0 600 121"
              fill="none"
            >
              <path
                d="M599 121V41C599 18.9086 581.091 1 559 1H0"
                stroke="#276EBC"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="tickIcon">
            <img src="https://s3-alpha-sig.figma.com/img/f181/dad2/4e97fd35bde5bb97ae4c86d36c249a5c?Expires=1703462400&Signature=LodvY7Iv-pBUZyaWAljIaFA-OaSiH~1mUxJwNxef3CxoYqikPf9vQDgzUkMyeLLBLj~mVMtZfCT-JP4Tx7vHmvPz1vtj2BJl2c8QjFpFT5jlqL-dnPysgqEsIqY8WJA8nXX-uIWtkdO8tTUwDiSj050PGhmuV3ys12Io9mhV71ezBlIBVljwXcTKPmtB9B1f~3qr9HZmOdGt3e~YRgvX1UjsYQ4F3arQOtZIvN9sOWzko0VyPJb53qH~6ZUSwmjEkLKCrq~liTAlBD3w0kgzOh8PFr3sc9zxl4RSyCEl3T3yiCC8RuCVeAG~Zy5Ww-Q6L~aF2KybYT0hQjNI1Q5Cww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="secondLine">
            <svg
              className="svg1"
              xmlns="http://www.w3.org/2000/svg"
              width="532"
              height="121"
              viewBox="0 0 532 121"
              fill="none"
            >
              <path
                d="M0.999996 121V41C0.999996 18.9086 18.9086 1 41 1H532"
                stroke="#276EBC"
                stroke-width="2"
              />
            </svg>
            <div className="rect2">
              <img src={clarityFormLine} />
              <p>
                Join us by filling the form and our experts will reach out for
                onboarding process
              </p>
            </div>
            <svg
              className="svg2"
              xmlns="http://www.w3.org/2000/svg"
              width="271"
              height="213"
              viewBox="0 0 271 213"
              fill="none"
            >
              <path
                d="M270 -2.38419e-06V172C270 194.091 252.091 212 230 212H0"
                stroke="#276EBC"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="arrowIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="77"
              viewBox="0 0 70 77"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M66.5749 2.61811C68.8911 5.04415 69.904 8.87977 68.2501 12.5914L42.1728 71.0644C41.5433 72.572 40.482 73.8597 39.1223 74.7654C37.7626 75.6712 36.1654 76.1544 34.5316 76.1544C32.8979 76.1544 31.3007 75.6712 29.941 74.7654C28.5813 73.8597 27.52 72.572 26.8905 71.0644L0.816747 12.5879C0.0670659 10.9485 -0.174031 9.12205 0.124578 7.34428C0.423187 5.56651 1.24779 3.91905 2.49196 2.61457C4.82591 0.170815 8.63675 -0.958976 12.2917 0.992482L33.2017 12.1558C33.6106 12.3774 34.0683 12.4935 34.5334 12.4935C34.9985 12.4935 35.4562 12.3774 35.8651 12.1558L56.7751 0.999565C60.4301 -0.948352 64.2409 0.177899 66.5749 2.62165V2.61811ZM59.279 5.68165L38.3655 16.8485C37.1867 17.4812 35.8695 17.8124 34.5316 17.8124C33.1937 17.8124 31.8766 17.4812 30.6978 16.8485L9.79133 5.68165C8.5305 5.00873 7.25904 5.31686 6.33466 6.28727C5.3855 7.27894 4.9605 8.83727 5.66883 10.4275L31.7426 68.9004C32.8972 71.4858 36.1697 71.4858 37.3207 68.9004L63.398 10.4275C64.1063 8.84081 63.6813 7.27894 62.7322 6.28727C61.8042 5.31686 60.5363 5.01227 59.2755 5.68519L59.279 5.68165Z"
                fill="#276EBC"
              />
            </svg>
          </div>
          <div className="thirdLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="102"
              viewBox="0 0 120 102"
              fill="none"
            >
              <path
                d="M1 3.21865e-06V61C1 83.0914 18.9086 101 41 101H120"
                stroke="#276EBC"
                stroke-width="2"
              />
            </svg>
            <div className="rect3">
              <img src={clarityFormLine} />
              <p>
                Join us by filling the form and our experts will reach out for
                onboarding process
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
