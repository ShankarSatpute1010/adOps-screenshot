import React, { useEffect } from "react";
import "./Option4.css";

const Option4Content = ({
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
  topLogo,
  rightLogo,
  siteTop,
  setSiteTop,
  // 1. ADD COLOR PROPS HERE
  brandTextColor,
  imageTextColor,
  siteTextColor,
}) => {
  useEffect(() => {
    formattedDate = format(startDate, "HH:MM EEE, d MMM ");
  }, []);

  useEffect(() => {
    if (selectSSOption.value == "Option 4") {
      setImageTopSize(390);
      setTop(357);
      setBrandTop(337);
      setSiteTop(300);
    }
  }, [imageTopSize, selectSSOption]);

  return (
    <div className="option-three">
      <img
        style={{ width: "100%" }}
        src="https://demo.adgebra.in/custom/images/White_1.jpg"
        alt="Blank Screenshot"
      />
      <img
        style={{
          position: "absolute",
          top: "13px",
          right: "33px",
          width: "13px",
          mixBlendMode: "exclusion",
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

      {/* 4. APPLY AD HEADING COLOR */}
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
            width: "280px",
            height: "auto",
            top: (imageTop?.value ? imageTop?.value : 355) + "px",
          }}
          alt="CropImage"
        />
      </div>
    </div>
  );
};

export default Option4Content;
