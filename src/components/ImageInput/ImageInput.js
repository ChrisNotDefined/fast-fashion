import React, { useRef, useState } from "react";
import dressMaker from "../../assets/svg/dressmaker.svg";
import { HTMLInput, ImgButton } from "./ImageInput.styles";

export default function ImageInput() {
  const [previewUrl, setPreviewUrl] = useState("");
  const inputRef = useRef();

  const onLoadImage = (event) => {
    console.log(event.target.files);

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      return;
    }

    setPreviewUrl("");
  };

  const imgSrc = previewUrl !== "" ? previewUrl : dressMaker;

  return (
    <div>
      <ImgButton
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <img src={imgSrc} alt="Selected" />
      </ImgButton>
      <HTMLInput ref={inputRef} type="file" accept="image/*" onChange={onLoadImage} />
    </div>
  );
}
