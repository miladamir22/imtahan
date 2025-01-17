import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Footer = () => {
  return (
    <div className="footer">
      <div style={{ marginTop: "2%" }}>
        <h1>Tasty</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <div
          className="footer-icons"
          style={{ display: "flex", gap: "10px", marginTop: "1%" }}
        >
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>

      <div style={{ marginTop: "2%" }}>
        <h1>Opening Hours</h1>
        <p>Monday: 08: - 22:00</p>
        <p>Monday: 08: - 22:00</p>
        <p>Monday: 08: - 22:00</p>
        <p>Monday: 08: - 22:00</p>
        <p>Monday: 08: - 22:00</p>
        <p>Monday: 08: - 22:00</p>
        <p>Monday: 08: - 22:00</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          marginTop: "2%",
        }}
      >
        <h1>Contact Information</h1>
        <a href="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          quisquam.
        </a>
        <a href="">Lorem ipsum dolor </a>
        <a href="">Lorem ipsum dolor </a>
        <a href="">Lorem ipsum dolor </a>
      </div>

      <div style={{ marginTop: "2%" }}>
        <h1>Newsletter</h1>
        <p>Far far away, behind the word mountains, far from the countries.</p>
        <input
          type="text"
          placeholder="subscribe"
          style={{ border: "1px solid grey" }}
        />
      </div>
    </div>
  );
};
