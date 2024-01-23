import React from "react";
// import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export default function Qr(props) {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 120, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={props.qrVal}
        viewBox={`0 0 256 256`}
      />
      <button onClick={props.closeQr}>Close</button>
    </div>
  );
}
