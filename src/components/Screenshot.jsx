import React, { useState } from "react";
import Select from "react-select";
import Crop from "./Crop";
import { ScreenshotImage } from "./ScreenshotImage";
import "./Screenshot.css";

export const Screenshot = () => {
  const [option, setOption] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const selectOption = [
    { value: "Crop Image", label: "Crop Image" },
    { value: "Screenshot Image", label: "Screenshot Image" },
  ];

  const handleOnChange = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <div className="container mt-3">
      <Select
        placeholder="Please Select Option"
        value={option}
        onChange={handleOnChange}
        options={selectOption}
      />

      <div className="screenshot-image mt-4">
        {option?.value == "Crop Image" && (
          <Crop setCroppedImageUrl={setCroppedImageUrl} setOption={setOption} />
        )}
        {option?.value == "Screenshot Image" && (
          <ScreenshotImage croppedImageUrl={croppedImageUrl} />
        )}
      </div>
    </div>
  );
};
