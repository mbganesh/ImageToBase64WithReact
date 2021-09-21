import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import ProfileImage from "../img/ProfileImage.png";

function Home() {
  const [image, setImage] = React.useState(ProfileImage);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await base64Convertor(file);
    console.log(base64);
    setImage(base64);
  };

  const base64Convertor = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <img style={{ width: "25%", height: "25%" }} src={image} />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </form>
    </div>
  );
}

export default Home;
