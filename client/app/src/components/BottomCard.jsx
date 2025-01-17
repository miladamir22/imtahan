import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MessageIcon from "@mui/icons-material/Message";
export const BottomCard = () => {
  return (
    <div>
      <h4>Blog</h4>

      <h1>Recent Blog</h1>

      <div className="dd"><Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
            <div
              style={{
                display: "flex",
                width: "30%",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg"
                alt="aspaz"
              />
              <p>July 2, 2024</p>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                officia pariatur quasi ratione cumque vel?
              </h2>
              <div className="readmore">
                <a href="">read more</a>
                <MessageIcon />
              </div>
            </div>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
            <div
              style={{
                display: "flex",
                width: "30%",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg"
                alt="aspaz"
              />
              <p>July 2, 2024</p>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                officia pariatur quasi ratione cumque vel?
              </h2>
              <div className="readmore">
                <a href="">read more</a>
                <MessageIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box></div>
    </div>
  );
};
