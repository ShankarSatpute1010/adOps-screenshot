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
import Option6Content from "./ssOptions/Option6Content";
import Option7Content from "./ssOptions/Option7Content";
import Option8Content from "./ssOptions/Option8Content";
import Option9Content from "./ssOptions/Option9Content";
import Option10Content from "./ssOptions/Option10Content";
import Option11Content from "./ssOptions/Option11Content";

import { SketchPicker } from "react-color";

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

  // AdCopyOption - Top value
  const [topAdCopy, setTopAdCopy] = useState(null);
  const [topAdCopyOption, setTopAdCopyOption] = useState({});
  const [top, setTop] = useState();

  // brandOption - Top
  const [topBrand, setTopBrand] = useState(null);
  const [topBrandOption, setTopBrandOption] = useState({});
  const [brandTop, setBrandTop] = useState();

  // siteOption - Top
  const [topSite, setTopSite] = useState(null);
  const [topSiteOption, setTopSiteOption] = useState({});
  const [siteTop, setSiteTop] = useState();

  // Battery - Top value
  const [topBattery, setTopBattery] = useState(null);
  const [topBatteryOptions, setTopBatteryOptions] = useState({});
  const [allTopBatteryOptions, setAllTopBatteryOptions] = useState();

  // Battery - Right value
  const [rightBattery, setRightBattery] = useState(null);
  const [rightBatteryOptions, setRightBatteryOptions] = useState({});
  const [allRightBatteryOptions, setAllRightBatteryOptions] = useState();

  // State for the currently selected values

  const initialTopLogo = 304;
  const initialRightLogo = 26;

  const [topLogo, setTopLogo] = useState({
    value: initialTopLogo,
    label: initialTopLogo,
  });
  const [rightLogo, setRightLogo] = useState({
    value: initialRightLogo,
    label: initialRightLogo,
  });

  // State for the dropdown lists
  const [topOptionsLogo, setTopOptionsLogo] = useState([]);
  const [rightOptionsLogo, setRightOptionsLogo] = useState([]);

  const [selectSSOption, setSelectSSOption] = useState({
    value: "Option 1",
    label: "Option 1",
  });

  const [imageTopSize, setImageTopSize] = useState(355);

  const [batteryOption, setBatteryOption] = useState({
    value: "1",
    label: "Battery 20%",
    url: "https://demo.adgebra.in/custom/fbss/Facebook_Screenshot/Battery_1.png",
  });

  // Color Variables options:-

  const [imageTextColor, setImageTextColor] = useState("#b3afaf");
  const [brandTextColor, setBrandTextColor] = useState("#ffff");
  const [siteTextColor, setSiteTextColor] = useState("#bcbcbc");

  const [showPicker, setShowPicker] = useState(null);

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

  const handleOnChangeTopAdCopy = (event) => {
    setTopAdCopy(event);
    setTop(event.value);
  };

  const handleOnChangeTopBrand = (event) => {
    setTopBrand(event);
    setBrandTop(event.value);
  };

  const handleOnChangeSite = (event) => {
    setTopSite(event);
    setSiteTop(event.value);
  };

  const handleTopBatteryOption = (event) => {
    setTopBattery(event);
    setAllTopBatteryOptions(event.value);
  };

  const handleRightBatteryOption = (event) => {
    setRightBattery(event);
    setAllRightBatteryOptions(event.value);
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
    let fontSizeValues = 25;
    let values;
    let fontSizeArr = [];
    for (let index = 8; index < fontSizeValues; index++) {
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
    for (let index = imageTopSize - 100; index < imageTopSize + 100; index++) {
      values = { value: index, label: index };
      topImageSizeArr.push(values);
    }
    setImageTopOption(topImageSizeArr);
  }, [imageTopSize]);

  useEffect(() => {
    let values;
    let topSizeArr = [];
    for (let index = top - 10; index < top + 10; index++) {
      values = { value: index, label: index };
      topSizeArr.push(values);
    }
    setTopAdCopyOption(topSizeArr);
  }, [top]);

  useEffect(() => {
    let values;
    let topSizeArr = [];
    for (let index = brandTop - 10; index < brandTop + 10; index++) {
      values = { value: index, label: index };
      topSizeArr.push(values);
    }
    setTopBrandOption(topSizeArr);
  }, [brandTop]);

  useEffect(() => {
    let values;
    let topSizeArr = [];
    for (let index = siteTop - 10; index < siteTop + 10; index++) {
      values = { value: index, label: index };
      topSizeArr.push(values);
    }
    setTopSiteOption(topSizeArr);
  }, [siteTop]);

  useEffect(() => {
    let values;
    let topSizeArr = [];
    for (
      let index = allTopBatteryOptions - 10;
      index < allTopBatteryOptions + 10;
      index++
    ) {
      values = { value: index, label: index };
      topSizeArr.push(values);
    }
    setTopBatteryOptions(topSizeArr);
  }, [allTopBatteryOptions]);

  useEffect(() => {
    let values;
    let topSizeArr = [];
    for (
      let index = allRightBatteryOptions - 10;
      index < allRightBatteryOptions + 10;
      index++
    ) {
      values = { value: index, label: index };
      topSizeArr.push(values);
    }
    setRightBatteryOptions(topSizeArr);
  }, [allRightBatteryOptions]);

  const handleImageTop = (e) => {
    setImageTop(e);
  };

  useEffect(() => {
    let options = [];
    let limit = 11;
    let values;
    for (let index = 1; index <= limit; index++) {
      values = { value: `Option ${index}`, label: `Option ${index}` };
      options.push(values);
    }
    setSSOption(options);
  }, []);

  useEffect(() => {
    const tOptions = [];
    for (let i = initialTopLogo - 100; i <= initialTopLogo + 100; i++) {
      tOptions.push({ value: i, label: `${i}` });
    }
    setTopOptionsLogo(tOptions);

    const rOptions = [];
    for (let i = initialRightLogo - 100; i <= initialRightLogo + 100; i++) {
      rOptions.push({ value: i, label: `${i}` });
    }
    setRightOptionsLogo(rOptions);
  }, [rightLogo, topLogo]);

  const handleScreenshotOption = (event) => {
    setSelectSSOption(event);
  };

  const allBatteryOptions = [
    {
      value: "1",
      label: "Battery 20%",
      url: "https://demo.adgebra.in/custom/fbss/Facebook_Screenshot/Battery_1.png",
    },
    {
      value: "2",
      label: "Battery 40%",
      url: "https://demo.adgebra.in/custom/fbss/Facebook_Screenshot/Battery_2.png",
    },
    {
      value: "3",
      label: "Battery 60%",
      url: "https://demo.adgebra.in/custom/fbss/Facebook_Screenshot/Battery_3.png",
    },
    {
      value: "4",
      label: "Battery 80%",
      url: "https://demo.adgebra.in/custom/fbss/Facebook_Screenshot/Battery_4.png",
    },
    {
      value: "5",
      label: "Battery 100%",
      url: "https://demo.adgebra.in/custom/fbss/Facebook_Screenshot/Battery_5.png",
    },
  ];

  const handleBatteryOption = (e) => {
    setBatteryOption(e);
  };

  const renderOptionContent = () => {
    // 1. Group all current and new props into one object
    const commonProps = {
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
      // Add the new color props here
      brandTextColor,
      imageTextColor,
      siteTextColor,
    };

    // 2. Create a map of your components
    const components = {
      "Option 1": Option1Content,
      "Option 2": Option2Content,
      "Option 3": Option3Content,
      "Option 4": Option4Content,
      "Option 5": Option5Content,
      "Option 6": Option6Content,
      "Option 7": Option7Content,
      "Option 8": Option8Content,
      "Option 9": Option9Content,
      "Option 10": Option10Content,
      "Option 11": Option11Content,
    };

    // 3. Get the selected component based on dropdown value
    const SelectedOption = components[selectSSOption?.value];

    // 4. Return the component with all props spread into it
    return SelectedOption ? (
      <SelectedOption {...commonProps} />
    ) : (
      <p>Select an option to see the content</p>
    );
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
              placeholder="Top"
              value={topAdCopy}
              onChange={handleOnChangeTopAdCopy}
              options={topAdCopyOption}
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
              placeholder="Top"
              value={topBrand}
              onChange={handleOnChangeTopBrand}
              options={topBrandOption}
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
              placeholder="Top"
              value={topSite}
              onChange={handleOnChangeSite}
              options={topSiteOption}
            />
            <Select
              className="ml-2 dropdown-size"
              placeholder="Size"
              value={siteTextFont}
              onChange={handleOnChangeSiteText}
              options={selectOptionSiteText}
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
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              marginBottom: "20px",
              justifyContent: "space-between",
            }}
          >
            {/* --- Ad Copy Color Picker --- */}
            <div className="form-group">
              <label style={{ display: "block" }}>Ad Copy Color</label>
              <div
                style={{
                  padding: "5px",
                  background: "#fff",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setShowPicker(showPicker === "image" ? null : "image")
                }
              >
                <div
                  style={{
                    width: "36px",
                    height: "14px",
                    borderRadius: "2px",
                    background: imageTextColor,
                  }}
                />
              </div>
              {showPicker === "image" && (
                <div style={{ position: "absolute", zIndex: "2" }}>
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => setShowPicker(null)}
                  />
                  <SketchPicker
                    color={imageTextColor}
                    onChange={(color) => setImageTextColor(color.hex)}
                  />
                </div>
              )}
            </div>

            {/* --- Brand Text Color Picker --- */}
            <div className="form-group">
              <label style={{ display: "block" }}>Brand Text Color</label>
              <div
                style={{
                  padding: "5px",
                  background: "#fff",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setShowPicker(showPicker === "brand" ? null : "brand")
                }
              >
                <div
                  style={{
                    width: "36px",
                    height: "14px",
                    borderRadius: "2px",
                    background: brandTextColor,
                  }}
                />
              </div>
              {showPicker === "brand" && (
                <div style={{ position: "absolute", zIndex: "2" }}>
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => setShowPicker(null)}
                  />
                  <SketchPicker
                    color={brandTextColor}
                    onChange={(color) => setBrandTextColor(color.hex)}
                  />
                </div>
              )}
            </div>

            {/* --- Site Text Color Picker --- */}
            <div className="form-group">
              <label style={{ display: "block" }}>Site Text Color</label>
              <div
                style={{
                  padding: "5px",
                  background: "#fff",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setShowPicker(showPicker === "site" ? null : "site")
                }
              >
                <div
                  style={{
                    width: "36px",
                    height: "14px",
                    borderRadius: "2px",
                    background: siteTextColor,
                  }}
                />
              </div>
              {showPicker === "site" && (
                <div style={{ position: "absolute", zIndex: "2" }}>
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => setShowPicker(null)}
                  />
                  <SketchPicker
                    color={siteTextColor}
                    onChange={(color) => setSiteTextColor(color.hex)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="d-flex w-100 align-items-center">
            <DatePicker
              className="form-control mb-4"
              placeholderText="Select Date"
              selected={startDate ? startDate : ""}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />

            <Button
              className="submit-button mx-2 mb-4"
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

            {logoCrop ? (
              <div className="d-flex align-items-center">
                <div className="ml-2 mb-4">
                  <small className="d-block text-muted mb-1">Top</small>
                  <Select
                    className="dropdown-size"
                    placeholder="Top"
                    value={topLogo}
                    onChange={(selected) => setTopLogo(selected)}
                    options={topOptionsLogo}
                    styles={{
                      container: (base) => ({ ...base, width: "120px" }),
                    }}
                  />
                </div>

                <div className="ml-2 mb-4">
                  <small className="d-block text-muted mb-1">Right</small>
                  <Select
                    className="dropdown-size"
                    placeholder="Right"
                    value={rightLogo}
                    onChange={(selected) => setRightLogo(selected)}
                    options={rightOptionsLogo}
                    styles={{
                      container: (base) => ({ ...base, width: "120px" }),
                    }}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
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
          <div className="form-group d-flex justify-content-between">
            <Select
              className="w-100"
              placeholder="Battery Options"
              value={batteryOption}
              onChange={handleBatteryOption}
              options={allBatteryOptions}
            />
            <Select
              className="dropdown-size ml-2"
              placeholder="Top"
              value={topBattery}
              onChange={handleTopBatteryOption}
              options={topBatteryOptions}
            />
            <Select
              className="dropdown-size ml-2"
              placeholder="Right"
              value={rightBattery}
              onChange={handleRightBatteryOption}
              options={rightBatteryOptions}
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
