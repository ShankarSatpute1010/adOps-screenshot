import React, { useEffect } from "react";
import "./Option11.css";

const Option11Content = ({
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
  top,
  setTop,
  brandTop,
  setBrandTop,
}) => {

  useEffect(() => {
    formattedDate = format(startDate, "H:m EEE, d MMM");
  }, []);

  useEffect(() => {
    if (selectSSOption.value == "Option 11") {
      setImageTopSize(450);
      setTop(360);
      setBrandTop(342);
    }
  }, [imageTopSize, selectSSOption]);

  return (
    <div className="option-eleven">
      <img
        style={{ width: "100%" }}
        src="https://demo.adgebra.in/custom/images/webss.jpg"
        alt="Blank Screenshot"
      />
      <img
        style={{
          position: "absolute",
          top: "79px",
          right: "19px",
          width: "15px",
          transform: "rotate(90deg)",
        }}
        src={batteryOption?.url}
        alt="battery"
      />
      <span className="date-format-time">
        {formattedDate ? (
          <>
            <span style={{fontSize: '25px'}}>{formattedDate.split(" ")[0]}</span> <br />
            {formattedDate.split(" ").slice(1).join(" ")}
          </>
        ) : (
          ""
        )}
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
      <span
        className="image-text-brand"
        style={{ fontSize: fontBrandText, top: brandTop + "px" }}
      >
        {brandText}
      </span>
      <span
        className="image-text-heading"
        style={{ fontSize: fontImageText, top: top + "px" }}
      >
        {imageText}
      </span>
      <div
        style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}
      >
        <img
          className="brand-image"
          src={croppedImageUrl}
          style={{
            width: "265px",
            height: "auto",
            top: (imageTop?.value ? imageTop?.value : 355) + "px",
          }}
          alt="CropImage"
        />
      </div>
    </div>
  );
};

export default Option11Content;
