import React from "react";

export const FirstCard = () => {
  return (
    <div style={{ width: "100%", padding:"15px" }}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "18%",
        }}
      >
        <div>
          <img
            src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg"
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
           padding: "80px"
          }}
        >
          <h3>About Tasty</h3>
          <h1>
            Our chef cooks the most <br /> delicious food for you
          </h1>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>          

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </div>
  );
};
