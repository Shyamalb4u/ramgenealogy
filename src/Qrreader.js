import React, { useState } from "react";
import QrReader from "react-qr-scanner";

export default function Qrreader(props) {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };
  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      console.log(result);
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };
  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result.text}</p>
      <button onClick={props.closeScanner}>Close</button>
    </>
  );
}
