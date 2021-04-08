import React from "react";

export default function Project() {
  return (
    <div className="project">
      <div
        style={{
          width: "130px",
          height: "45px",
          borderRadius: "10px 10px 0px 0px",
          marginTop: "-1px",
          marginLeft: "-1px",
          border: "1px solid white",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            color: "white",
            height: "100%",
            fontFamily: "Poppins",
            fontWeight: "300",
            fontSize: "15px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          CertamenBot
        </h1>
      </div>
    </div>
  );
}

/*
<img
          src={CertamenBot}
          alt="cb"
          style={{
            width: "135px",
            height: "50px",
            marginLeft: "-3px",
            marginTop: "-3px",
            objectFit: "cover",
            filter: "blur(3px) brightness(80%)",
          }}
        />
*/
