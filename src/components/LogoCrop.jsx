import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Stack from "@mui/material/Stack";

export const LogoCrop = ({ handleClose, show, setLogoCrop }) => {
  const [uploadImage, setUploadImage] = useState("");
  const [isUpload, setIsUpload] = useState(true);
  const [isClear, setIsClear] = useState(false);
  const cropperRef = useRef(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    cropper.getCroppedCanvas().toBlob(
      (blob) => {
        const url = URL.createObjectURL(blob);
        setLogoCrop(url);
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
      setIsClear(true);
    }
  };

  const handleClearLogo = () => {
    setUploadImage("");
    setIsUpload(true);
    setIsClear(false);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logo Crop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                  aspectRatio={1 / 1}
                  guides={false}
                  crop={onCrop}
                  ref={cropperRef}
                />
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isClear ? (
            <Button
              className="submit-button"
              variant="primary"
              onClick={handleClearLogo}
            >
              Clear
            </Button>
          ) : (
            ""
          )}
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Stack spacing={2} direction="row">
            <Button
              className="submit-button"
              variant="contained"
              color="success"
              onClick={() => {
                handleClose();
              }}
            >
              Submit
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
