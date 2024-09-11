import React, { useEffect, useState } from "react";
import "./ScreenshotImage.css";
import Button from "@mui/material/Button";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";
import { LogoCrop } from "./LogoCrop";

export const ScreenshotImage = ({ croppedImageUrl }) => {
  const [brandText, setBrandText] = useState("");
  const [imageText, setImageText] = useState("");
  const [optionImageText, setOptionImageText] = useState(null);
  const [brandTextFont, setOptionBrandTextFont] = useState(null);
  const [siteText, setSiteText] = useState("");
  const [siteTextFont, setSiteTextFont] = useState(null);

  const [selectOptionImageText, setSelectOptionImageText] = useState({});
  const [selectOptionBrandText, setSelectOptionBrandText] = useState({});
  const [selectOptionSiteText, setSelectOptionSiteText] = useState({});

  const [fontImageText, setFontImageText] = useState("14px");
  const [fontBrandText, setFontBrandText] = useState("14px");
  const [siteFontSize, setSiteFontSize] = useState("14px");
  const [siteTime, setSiteTime] = useState("");

  const [imageTop, setImageTop] = useState("");
  const [imageTopOption, setImageTopOption] = useState({});

  const [startDate, setStartDate] = useState(new Date());

  const [show, setShow] = useState(false);
  const [logoCrop, setLogoCrop] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnDownload = () => {
    const node = document.getElementById("download-div");
    htmlToImage
      .toBlob(node, { quality: 1, pixelRatio: 2 })
      .then((blob) => {
        saveAs(blob, "ss-image.jpg");
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  };

  const handleOnChangeImageText = (event) => {
    setOptionImageText(event);
    setFontImageText(event.value);
  };

  const handleOnChangeBrandText = (event) => {
    setOptionBrandTextFont(event);
    setFontBrandText(event.value);
  };

  const handleOnChangeSiteText = (event) => {
    setSiteTextFont(event);
    setSiteFontSize(event.value);
  };

  useEffect(() => {
    let fontSizeValues = 30;
    let values;
    let fontSizeArr = [];
    for (let index = 10; index < fontSizeValues; index++) {
      values = { value: index, label: index };
      fontSizeArr.push(values);
    }
    setSelectOptionImageText(fontSizeArr);
    setSelectOptionBrandText(fontSizeArr);
    setSelectOptionSiteText(fontSizeArr);
  }, []);

  const formattedDate = format(startDate, "HH:mm EEE, MMM d");

  useEffect(() => {
    let topImageSize = 355;
    let values;
    let topImageSizeArr = [];
    for (let index = 340; index < topImageSize; index++) {
      values = { value: index, label: index };
      topImageSizeArr.push(values);
    }
    setImageTopOption(topImageSizeArr);
  }, []);

  const handleImageTop = (e) => {
    console.log(e);

    setImageTop(e);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <form>
          <div className="form-group d-flex">
            <textarea
              type="text"
              className="form-control"
              value={imageText}
              id="formGroupImageText"
              placeholder="Enter Ad Copy"
              maxLength={80}
              autoComplete="off"
              onChange={(e) => {
                setImageText(e.target.value);
              }}
            />
            <Select
              className="ml-2 dropdown-size"
              placeholder="Size"
              value={optionImageText}
              onChange={handleOnChangeImageText}
              options={selectOptionImageText}
            />
          </div>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              value={brandText}
              id="formBrandText"
              placeholder="Enter Brand Name"
              autoComplete="off"
              onChange={(e) => {
                setBrandText(e.target.value);
              }}
              maxLength={20}
            />
            <Select
              className="ml-2 dropdown-size"
              placeholder="Size"
              value={brandTextFont}
              onChange={handleOnChangeBrandText}
              options={selectOptionBrandText}
            />
          </div>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              value={siteText}
              id="formSiteText"
              placeholder="Enter Site Name"
              autoComplete="off"
              onChange={(e) => {
                setSiteText(e.target.value);
              }}
            />
            <Select
              className="ml-2 dropdown-size"
              placeholder="Size"
              value={siteTextFont}
              onChange={handleOnChangeSiteText}
              options={selectOptionSiteText}
            />
          </div>
          <div className="d-flex w-100">
            <DatePicker
              className="form-control mb-4"
              placeholderText="Select Date"
              selected={startDate ? startDate : ""}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
            <Button
              className="submit-button mx-2"
              variant="contained"
              style={{ height: "37px", width: "150px" }}
              onClick={handleShow}
            >
              Crop Logo
            </Button>
            <LogoCrop
              show={show}
              handleClose={handleClose}
              setLogoCrop={setLogoCrop}
            />
          </div>
          <div className="form-group w-100">
            <Select
              className="dropdown-size w-100"
              placeholder="Image Top Size"
              value={imageTop}
              onChange={handleImageTop}
              options={imageTopOption}
            />
          </div>
          <div className="form-group d-flex" style={{ width: "100px" }}>
            <input
              type="text"
              className="form-control"
              value={siteTime}
              id="formSiteText"
              placeholder="Enter Time"
              autoComplete="off"
              onChange={(e) => {
                setSiteTime(e.target.value);
              }}
            />
          </div>
        </form>
        <div className="screen-image" id="download-div">
          <img
            src="https://demo.adgebra.in/custom/images/Blank_screenshot.jpg"
            alt="Blank Screenshot"
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
            className="image-text-chrome leftSize" style={{fontSize: siteFontSize}}
            >Chrome</span>
            <span className="leftSize"
              style={{
                // position: "absolute",
                // left: "105px",
                // top: "259px",
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
            <span className="leftSize"
              style={{
                // position: "absolute",
                // left: "210px",
                // top: "259px",
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
            <img className="logo-crop" src={logoCrop} alt="Logo" />
          ) : (
            ""
          )}
          <span
            className="image-text-brand"
            style={{ fontSize: fontBrandText }}
          >
            {brandText}
          </span>
          <span
            className="image-text-heading"
            style={{ fontSize: fontImageText }}
          >
            {imageText}
          </span>
          <div style={{ position: "absolute", width: "100%", height: "100%" }}>
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
        {croppedImageUrl && (
          <Button
            className="submit-button mb-5"
            variant="contained"
            onClick={handleOnDownload}
          >
            Donwload
          </Button>
        )}
      </div>
    </>
  );
};
