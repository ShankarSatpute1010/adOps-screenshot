import React, { useEffect } from "react";
import "./Option2.css";

const Option2Content = ({
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
  imageTopSize
}) => {
  formattedDate = format(startDate, "HH:MM EEE, d MMM ");

  useEffect(() => {
    if(croppedImageUrl){
      setImageTopSize(260);
    }
  }, [imageTopSize]);

  return (
    <div className="option-two">
      <img
        style={{ width: "100%" }}
        src="https://demo.adgebra.in/custom/images/IRCTC.jpg"
        alt="Blank Screenshot"
      />
      <span className="date-format-time">
        {formattedDate ? formattedDate : ""}
      </span>
      <div className="heading-text-notif">
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
            width: "240px",
            height: "auto",
            marginLeft: "40px",
            top: (imageTop?.value ? imageTop?.value : 355) + "px",
          }}
          alt="CropImage"
        />
      </div>
    </div>
  );
};

export default Option2Content;
