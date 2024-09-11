import React, { useRef, useState } from "react";
import "./Crop.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Crop = ({ setCroppedImageUrl, setOption }) => {
  const [uploadImage, setUploadImage] = useState("");
  const [isUpload, setIsUpload] = useState(true);
  const cropperRef = useRef(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    cropper.getCroppedCanvas().toBlob(
      (blob) => {
        const url = URL.createObjectURL(blob);
        setCroppedImageUrl(url);
      },
      "image/jpeg",
      0.8
    );
  };

  const handleFileOnChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadImage(imageUrl);
      setIsUpload(false);
    }
  };

  const handleOnClickScreenshot = () => {
    setOption({ value: "Screenshot Image", label: "Screenshot Image" });
  };

  return (
    <div>
      {isUpload && (
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            onChange={handleFileOnChange}
            accept="image/jpeg"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      )}

      {uploadImage && (
        <div>
          <Cropper
            src={uploadImage}
            style={{ height: "auto", width: "100%" }}
            aspectRatio={16 / 9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
          />

          <Stack spacing={2} direction="row">
            <Button
              className="submit-button"
              variant="contained"
              onClick={handleOnClickScreenshot}
            >
              Submit
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Crop;
