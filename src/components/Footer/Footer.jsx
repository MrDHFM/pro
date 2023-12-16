import React from "react";
import Grid from "@mui/material/Grid";
import carLogo from "../../images/blue logo transp 2.png";
import bidrydeLogo from "../../images/blue wordmark transp 2.png";
import fbIcon from "../../images/facebook-f.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Grid className="x" container>
        <Grid item>
          <div className="footerLeft">
            <div className="footerLogo">
              <img src={carLogo} />
              <img src={bidrydeLogo} />
            </div>
            <p className="footerText">
              A car-sharing marketplace where you can book any car you want and
              at the same time, host any car you have.
            </p>
            <div className="socialIcons">
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <img src={fbIcon} />
                </Grid>
                <Grid item xs={2}>
                  <img src={fbIcon} />
                </Grid>
                <Grid item xs={2}>
                  <img src={fbIcon} />
                </Grid>
                <Grid item xs={2}>
                  <img src={fbIcon} />
                </Grid>
                <Grid item xs={2}>
                  <img src={fbIcon} />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>

        <Grid item>
          <div className="footerRight">
            <Grid container className="iconGrid">
              <Grid item className="iconGridItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="125"
                  height="125"
                  viewBox="0 0 125 125"
                  fill="none"
                >
                  <circle cx="62.5" cy="62.5" r="62.5" fill="#EEEEEE" />
                  <path
                    d="M43.8711 58.6978C48.9911 68.76 57.24 76.9733 67.3022 82.1289L75.1244 74.3067C76.0844 73.3467 77.5067 73.0267 78.7511 73.4533C82.7333 74.7689 87.0356 75.48 91.4444 75.48C93.4 75.48 95 77.08 95 79.0356V91.4444C95 93.4 93.4 95 91.4444 95C58.0578 95 31 67.9422 31 34.5556C31 32.6 32.6 31 34.5556 31H47C48.9556 31 50.5556 32.6 50.5556 34.5556C50.5556 39 51.2667 43.2667 52.5822 47.2489C52.9733 48.4933 52.6889 49.88 51.6933 50.8756L43.8711 58.6978Z"
                    fill="#276EBC"
                  />
                </svg>
                <p className="iconText">0404 895 7007</p>
              </Grid>
              <Grid item className="iconGridItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="125"
                  height="125"
                  viewBox="0 0 125 125"
                  fill="none"
                >
                  <circle cx="62.5" cy="62.5" r="62.5" fill="#EEEEEE" />
                </svg>
                <p className="iconText">support@bidryde.in</p>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <div className="linkSection">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <a href="#" className="footerLink">
              Terms of Service
            </a>
          </Grid>
          <Grid item className="footerLink " xs={12} md={4}>
            <a href="#">Privacy Policy</a>
          </Grid>
          <Grid item className="footerLink" xs={12} md={4}>
            <a href="#">Fees Policy</a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
