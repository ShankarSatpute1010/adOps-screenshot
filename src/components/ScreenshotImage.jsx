import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Option1Content from "./ssOptions/Option1Content";
import Option2Content from "./ssOptions/Option2Content";
import Option3Content from "./ssOptions/Option3Content";
import Option4Content from "./ssOptions/Option4Content";
import Option5Content from "./ssOptions/Option5Content";

import { format } from "date-fns";
import { LogoCrop } from "./LogoCrop";

export const ScreenshotImage = ({ croppedImageUrl }) => {
  const [brandText, setBrandText] = useState("");
  const [imageText, setImageText] = useState("");
  const [ssName, setSSName] = useState("");
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

  const [ssOption, setSSOption] = useState([]);

  const [selectSSOption, setSelectSSOption] = useState({
    value: "Option 1",
    label: "Option 1",
  });

  const [imageTopSize, setImageTopSize] = useState(355);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnDownload = () => {
    const node = document.getElementById("download-div");
    htmlToImage
      .toBlob(node, { quality: 1, pixelRatio: 2 })
      .then((blob) => {
        saveAs(blob, `${ssName ? ssName : "ssImage"}.jpg`);
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
    let values;
    let topImageSizeArr = [];
    for (let index = imageTopSize - 15; index < imageTopSize; index++) {
      values = { value: index, label: index };
      topImageSizeArr.push(values);
    }
    setImageTopOption(topImageSizeArr);
  }, [imageTopSize]);

  const handleImageTop = (e) => {
    setImageTop(e);
  };

  useEffect(() => {
    let options = [];
    let limit = 5;
    let values;
    for (let index = 1; index <= limit; index++) {
      values = { value: `Option ${index}`, label: `Option ${index}` };
      options.push(values);
    }
    setSSOption(options);
  }, []);

  const handleScreenshotOption = (event) => {
    setSelectSSOption(event);
  };

  const renderOptionContent = () => {
    switch (selectSSOption?.value) {
      case "Option 1":
        return (
          <Option1Content
            formattedDate={formattedDate}
            siteFontSize={siteFontSize}
            logoCrop={logoCrop}
            fontBrandText={fontBrandText}
            fontImageText={fontImageText}
            brandText={brandText}
            croppedImageUrl={croppedImageUrl}
            imageTop={imageTop}
            siteText={siteText}
            siteTime={siteTime}
            imageText={imageText}
            format={format}
            startDate={startDate}
            setImageTopSize={setImageTopSize}
            imageTopSize={imageTopSize}
          />
        );
      case "Option 2":
        return (
          <Option2Content
            formattedDate={formattedDate}
            siteFontSize={siteFontSize}
            logoCrop={logoCrop}
            fontBrandText={fontBrandText}
            fontImageText={fontImageText}
            brandText={brandText}
            croppedImageUrl={croppedImageUrl}
            imageTop={imageTop}
            siteText={siteText}
            siteTime={siteTime}
            imageText={imageText}
            format={format}
            startDate={startDate}
            setImageTopSize={setImageTopSize}
            imageTopSize={imageTopSize}
          />
        );
      case "Option 3":
        return (
          <Option3Content
            formattedDate={formattedDate}
            siteFontSize={siteFontSize}
            logoCrop={logoCrop}
            fontBrandText={fontBrandText}
            fontImageText={fontImageText}
            brandText={brandText}
            croppedImageUrl={croppedImageUrl}
            imageTop={imageTop}
            siteText={siteText}
            siteTime={siteTime}
            imageText={imageText}
            format={format}
            startDate={startDate}
            setImageTopSize={setImageTopSize}
            imageTopSize={imageTopSize}
          />
        );
      case "Option 4":
        return (
          <Option4Content
            formattedDate={formattedDate}
            siteFontSize={siteFontSize}
            logoCrop={logoCrop}
            fontBrandText={fontBrandText}
            fontImageText={fontImageText}
            brandText={brandText}
            croppedImageUrl={croppedImageUrl}
            imageTop={imageTop}
            siteText={siteText}
            siteTime={siteTime}
            imageText={imageText}
            format={format}
            startDate={startDate}
            setImageTopSize={setImageTopSize}
            imageTopSize={imageTopSize}
          />
        );
      case "Option 5":
        return (
          <Option5Content
            formattedDate={formattedDate}
            siteFontSize={siteFontSize}
            logoCrop={logoCrop}
            fontBrandText={fontBrandText}
            fontImageText={fontImageText}
            brandText={brandText}
            croppedImageUrl={croppedImageUrl}
            imageTop={imageTop}
            siteText={siteText}
            siteTime={siteTime}
            imageText={imageText}
            format={format}
            startDate={startDate}
            setImageTopSize={setImageTopSize}
            imageTopSize={imageTopSize}
          />
        );
      default:
        return <p>Select an option to see the content</p>;
    }
  };

  return (
    <>
      <div className="row col-md-12 px-0">
        <form className="col-md-7 col-sm-12 pl-0">
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              value={ssName}
              id="formSSName"
              placeholder="Enter SS Name"
              autoComplete="off"
              onChange={(e) => {
                setSSName(e.target.value);
              }}
              maxLength={20}
            />
          </div>
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
          <div className="form-group" style={{ width: "110px" }}>
            <input
              type="text"
              className="form-control"
              value={siteTime}
              id="formTime"
              placeholder="Enter Time"
              autoComplete="off"
              onChange={(e) => {
                setSiteTime(e.target.value);
              }}
            />
          </div>
          <div className="form-group w-100">
            <Select
              className="dropdown-size w-100"
              placeholder="Screenshot Options"
              value={selectSSOption}
              onChange={handleScreenshotOption}
              options={ssOption}
            />
          </div>
        </form>
        <div>
          <div className="screen-image" id="download-div">
            {renderOptionContent()}
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
      </div>
    </>
  );
};
