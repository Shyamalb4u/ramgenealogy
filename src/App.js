import React from "react";
import { useState } from "react";
import Qr from "./Qr";
import Qrreader from "./Qrreader";

function App() {
  const family = [
    {
      name: "Loard Ram",
      father: "Dasaratha",
      photo:
        "https://m.media-amazon.com/images/I/71ckb5HPaIL._AC_UF1000,1000_QL80_.jpg",
      about:
        "When Ram returned victorious to Ayodhya with Sita after slaying Ravan and conquering Lanka, revealing that He was indeed God incarnate, He was called Shriram by the residents of Ayodhya. In the Valmiki Ramayaṇ, Ram is referred to as ‘Narapungav’ (The Supreme Man) and not as God.",
    },
    {
      name: "Dasaratha",
      father: "Aja",
      photo:
        "https://cdn1.vectorstock.com/i/1000x1000/54/05/king-dasaratha-cartoon-character-vector-37655405.jpg",
      about:
        "When Dasaratha returned victorious to Ayodhya with Sita after slaying Ravan and conquering Lanka, revealing that He was indeed God incarnate, He was called Shriram by the residents of Ayodhya. In the Valmiki Ramayaṇ, Ram is referred to as ‘Narapungav’ (The Supreme Man) and not as God.",
    },
    {
      name: "Aja",
      father: "Nabhag",
      photo:
        "https://m.media-amazon.com/images/I/71ckb5HPaIL._AC_UF1000,1000_QL80_.jpg",
      about:
        "When Aja returned victorious to Ayodhya with Sita after slaying Ravan and conquering Lanka, revealing that He was indeed God incarnate, He was called Shriram by the residents of Ayodhya. In the Valmiki Ramayaṇ, Ram is referred to as ‘Narapungav’ (The Supreme Man) and not as God.",
    },
    {
      name: "Nabhag",
      father: "Jajati",
      photo:
        "https://cdn1.vectorstock.com/i/1000x1000/54/05/king-dasaratha-cartoon-character-vector-37655405.jpg",
      about:
        "When Nabhag returned victorious to Ayodhya with Sita after slaying Ravan and conquering Lanka, revealing that He was indeed God incarnate, He was called Shriram by the residents of Ayodhya. In the Valmiki Ramayaṇ, Ram is referred to as ‘Narapungav’ (The Supreme Man) and not as God.",
    },
    {
      name: "Jajati",
      father: "Nahus",
      photo:
        "https://cdn1.vectorstock.com/i/1000x1000/54/05/king-dasaratha-cartoon-character-vector-37655405.jpg",
      about:
        "When Jajati returned victorious to Ayodhya with Sita after slaying Ravan and conquering Lanka, revealing that He was indeed God incarnate, He was called Shriram by the residents of Ayodhya. In the Valmiki Ramayaṇ, Ram is referred to as ‘Narapungav’ (The Supreme Man) and not as God.",
    },
    {
      name: "Nahus",
      father: "Don't Know",
      photo:
        "https://cdn1.vectorstock.com/i/1000x1000/54/05/king-dasaratha-cartoon-character-vector-37655405.jpg",
      about:
        "When Nahus returned victorious to Ayodhya with Sita after slaying Ravan and conquering Lanka, revealing that He was indeed God incarnate, He was called Shriram by the residents of Ayodhya. In the Valmiki Ramayaṇ, Ram is referred to as ‘Narapungav’ (The Supreme Man) and not as God.",
    },
  ];
  const [qr, setqr] = useState(false);
  const [qrread, setqrread] = useState(false);
  // const [myData, setmyData] = useState({
  //   name: "",
  //   father: "",
  //   photo: "",
  //   about: "",
  // });
  const [myData, setmyData] = useState(family[0]);
  const getData = (id) => {
    setmyData(
      family.find((matchData) => {
        // console.log(id, matchData);
        return matchData.name === id;
      })
    );
    //console.log("Clicked");
  };
  const qrClick = () => {
    setqr(true);
  };
  const closeQr = () => {
    setqr(false);
  };
  const scannerClick = () => {
    setqrread(true);
  };
  const closeScanner = () => {
    setqrread(false);
  };
  return (
    <>
      <ul className="nav nav-tabs">
        {family.map((famData) => {
          return (
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => getData(famData.name)}
              >
                {famData.name}
              </button>
            </li>
          );
        })}
        <li className="nav-item">
          <button
            className="nav-link active"
            onClick={() => {
              qrClick();
            }}
          >
            My QR
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link active"
            onClick={() => {
              scannerClick();
            }}
          >
            Pay Some One
          </button>
        </li>
      </ul>
      {qr ? (
        <Qr
          qrVal="852145454545@caps"
          closeQr={() => {
            closeQr();
          }}
        />
      ) : (
        ""
      )}
      {qrread ? (
        <Qrreader
          closeScanner={() => {
            closeScanner();
          }}
        />
      ) : (
        ""
      )}
      <div className="card">
        <div className="card-header">{myData.name}</div>
        <div className="card-body">
          <h5 className="card-title">Son Of {myData.father} </h5>
          <p className="card-text">{myData.about}</p>
          <p>
            <img src={myData.photo} width="50" alt="na"></img>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
