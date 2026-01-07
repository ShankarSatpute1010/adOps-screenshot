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
  imageTopSize,
  selectSSOption,
  batteryOption,
  top,
  setTop,
  brandTop,
  setBrandTop,
  siteTop,
  setSiteTop,
  topLogo,
  rightLogo,
  // 1. ADD COLOR PROPS HERE
  brandTextColor,
  imageTextColor,
  siteTextColor,
}) => {
  useEffect(() => {
    formattedDate = format(startDate, "HH:MM EEE, d MMM ");
  }, []);

  useEffect(() => {
    if (selectSSOption.value == "Option 2") {
      setImageTopSize(260);
      setTop(220);
      setBrandTop(300);
      setSiteTop(300);
    }
  }, [imageTopSize, selectSSOption]);

  return (
    <div className="option-two">
      <img
        style={{ width: "100%" }}
        src="https://demo.adgebra.in/custom/images/IRCTC.jpg"
        alt="Blank Screenshot"
      />
      <img
        style={{
          position: "absolute",
          top: "11px",
          right: "12px",
          width: "13px",
        }}
        src={batteryOption?.url}
        alt="battery"
      />
      <span className="date-format-time">
        {formattedDate ? formattedDate : ""}
      </span>

      <div className="heading-text-notif" style={{ top: siteTop }}>
        {/* 2. APPLY SITE TEXT COLOR */}
        <span
          className="image-text-site leftSize"
          style={{ fontSize: siteFontSize, color: siteTextColor }}
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

      {logoCrop ? (
        <img
          className="logo-crop"
          src={logoCrop}
          alt="Logo"
          style={{
            top: `${topLogo.value}px`,
            right: `${rightLogo.value}px`,
            position: "absolute", // Ensures the top/right properties work
          }}
        />
      ) : (
        ""
      )}

      {/* 3. APPLY BRAND TEXT COLOR */}
      <span
        className="image-text-brand"
        style={{
          fontSize: fontBrandText,
          top: brandTop + "px",
          color: brandTextColor,
        }}
      >
        {brandText}
      </span>

      {/* 4. APPLY IMAGE (AD COPY) TEXT COLOR */}
      <span
        className="image-text-heading"
        style={{
          fontSize: fontImageText,
          top: top + "px",
          color: imageTextColor,
        }}
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
            width: "250px",
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
