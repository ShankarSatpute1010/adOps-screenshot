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
  top,
  setTop,
  brandTop,
  setBrandTop,
  siteTop,
  setSiteTop,
  topLogo,
  rightLogo,
  allTopBatteryOptions,
  setAllTopBatteryOptions,
  allRightBatteryOptions,
  setAllRightBatteryOptions,
  // 1. ADD THESE COLOR PROPS HERE
  brandTextColor,
  imageTextColor,
  siteTextColor,
}) => {
  useEffect(() => {
    formattedDate = format(startDate, "HH:mm EEEE, MMM d");
  }, []);

  useEffect(() => {
    if (selectSSOption.value == "Option 1") {
      setImageTopSize(355);
      setTop(312);
      setBrandTop(300);
      setSiteTop(300);
      setAllTopBatteryOptions(10);
      setAllRightBatteryOptions(24)
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
        style={{
          position: "absolute",
          top: allTopBatteryOptions,
          right: allRightBatteryOptions,
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
            color: siteTextColor
          }}
        >
          .
        </span>
        <span
          className="image-text-time leftSize"
          style={{ fontSize: siteFontSize, color: siteTextColor }}
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

      {/* 3. APPLY BRAND TEXT COLOR HERE */}
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

      {/* 4. APPLY IMAGE (AD COPY) TEXT COLOR HERE */}
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
