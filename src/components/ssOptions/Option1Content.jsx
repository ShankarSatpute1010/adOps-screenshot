import React, { useEffect } from "react";
import "../ScreenshotImage.css";

const Option1Content = ({
  formattedDate,
  siteFontSize,
  logoCrop,
  fontBrandText,
  fontImageText,
  brandText,
  croppedImageUrl,
  imageTop,
  siteText,
  siteTime,
  imageText,
  format,
  startDate,
  setImageTopSize,
  imageTopSize,
  selectSSOption,
  batteryOption,
}) => {
  useEffect(() => {
    formattedDate = format(startDate, "HH:mm EEEE, MMM d");
  }, []);

  useEffect(() => {
    if (selectSSOption.value == "Option 1") {
      setImageTopSize(355);
    }
  }, [imageTopSize, selectSSOption]);

  return (
    <div className="option-one">
      <img
        style={{ width: "100%" }}
        src="https://demo.adgebra.in/custom/images/Blank_screenshot.jpg"
        alt="Blank Screenshot"
      />

      <img
        style={{ position: "absolute", top: "10px", right: '24px', width: '13px' }}
        src={batteryOption?.url}
        alt="battery"
      />
      <span className="date-format-time">
        {formattedDate ? formattedDate : ""}
      </span>
      <div className="heading-text-notif">
        <img
          className="chrome-logo"
          src="https://demo.adgebra.in/custom/images/Chrome-Logo-png.png"
          alt="Logo"
        />
        <span
          className="image-text-chrome leftSize"
          style={{ fontSize: siteFontSize }}
        >
          Chrome
        </span>
        <span
          className="leftSize"
          style={{
            position: "relative",
            top: "-5px",
            fontSize: "18px",
            color: "#bcbcbc",
          }}
        >
          .
        </span>
        <span
          className="image-text-site leftSize"
          style={{ fontSize: siteFontSize }}
        >
          {siteText}
        </span>
        <span
          className="leftSize"
          style={{
            position: "relative",
            top: "-5px",
            fontSize: "18px",
            color: "#bcbcbc",
          }}
        >
          .
        </span>
        <span
          className="image-text-time leftSize"
          style={{ fontSize: siteFontSize }}
        >
          {siteTime}
        </span>
      </div>
      {logoCrop ? <img className="logo-crop" src={logoCrop} alt="Logo" /> : ""}
      <span className="image-text-brand" style={{ fontSize: fontBrandText }}>
        {brandText}
      </span>
      <span className="image-text-heading" style={{ fontSize: fontImageText }}>
        {imageText}
      </span>
      <div
        style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}
      >
        <img
          className="brand-image"
          src={croppedImageUrl}
          style={{
            width: "300px",
            height: "auto",
            top: (imageTop?.value ? imageTop?.value : 355) + "px",
          }}
          alt="CropImage"
        />
      </div>
    </div>
  );
};

export default Option1Content;
