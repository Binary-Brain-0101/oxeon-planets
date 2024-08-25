import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../css/CCTVForm.css";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CCTVFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    recorderType: "",
    channels: "",
    cameras: [{ model: "", qty: 1 }],
    storageSize: "",
    message: "",
  });

  const [channelOptions, setChannelOptions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCameraChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      cameras: prev.cameras.map((camera, i) =>
        i === index ? { ...camera, [name]: value } : camera
      ),
    }));
  };

  const addCameraField = () => {
    setFormData((prev) => ({
      ...prev,
      cameras: [...prev.cameras, { model: "", qty: 1 }],
    }));
  };

  const removeCameraField = (index) => {
    setFormData((prev) => {
      if (prev.cameras.length > 1) {
        return {
          ...prev,
          cameras: prev.cameras.filter((_, i) => i !== index),
        };
      }
      return prev; // Do nothing if there's only one camera left
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show a pending notification
    const toastId = toast.info("Sending your message...", {
        autoClose: false,
        closeButton: false,
        position: "bottom-center"
    });

    // Extract form data
    const { name, email, phone, recorderType, channels, cameras, storageSize, message } = formData;

    // Format the full message with all the form data
    const fullMessage = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Recorder Type: ${recorderType}
        Channels: ${channels}
        Cameras: ${cameras.map((camera, index) => `\n  Camera ${index + 1} - Model: ${camera.model}, Qty: ${camera.qty}`).join('')}
        Storage Size: ${storageSize}
        Message: ${message}
    `;

    // Prepare the template parameters
    const templateParams = {
        from_name: name,
        email,
        phone,
        message: fullMessage,
    };

    // Send the email using emailjs
    emailjs
        .send(
            "service_yfmwmlr", // Your service ID
            "template_eco0f3b", // Your template ID
            templateParams,
            "h8nLrqDh_K3_5S0Ls" // Your user ID
        )
        .then(
            (response) => {
                toast.dismiss(toastId);
                toast.success("Message sent successfully!", {
                    autoClose: 2000,
                    position: "bottom-center"
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    recorderType: '',
                    channels: '',
                    cameras: [{ model: '', qty: 1 }],
                    storageSize: '',
                    message: '',
                });
                setTimeout(() => {
                    onClose();
                }, 2000);
            },
            (error) => {
                toast.dismiss(toastId);
                toast.error("Something went wrong!", {
                    autoClose: 5000,
                    position: 'bottom-center'
                });
                console.log("FAILED...", error);
            }
        );
};


  const options = {
    recorderType: [
      { value: "DVR 5MP", label: "DVR 5MP" },
      { value: "XVR 5MP", label: "XVR 5MP" },
      { value: "NVR 5MP", label: "NVR 5MP" },
      { value: "NVR 8MP", label: "NVR 8MP" },
    ],
    allChannels: [
      { value: "4 Channel", label: "4 Channel" },
      { value: "8 Channel", label: "8 Channel" },
      { value: "16 Channel", label: "16 Channel" },
      { value: "32 Channel", label: "32 Channel" },
    ],
    nvrChannels: [
      { value: "10 Channel", label: "10 Channel" },
      { value: "16 Channel", label: "16 Channel" },
      { value: "32 Channel", label: "32 Channel" },
    ],
    storageSize: [
      { value: "1TB", label: "1TB" },
      { value: "2TB", label: "2TB" },
      { value: "4TB", label: "4TB" },
    ],
    cameraModels: [
      { value: "Bullet Cam", label: "Bullet Cam" },
      { value: "Dome Cam", label: "Dome Cam" },
      { value: "PTZ Cam", label: "PTZ Cam" },
    ],
  };

  useEffect(() => {
    if (formData.recorderType === 'NVR') {
        setChannelOptions(options.nvrChannels);
    } else {
        setChannelOptions(options.allChannels);
    }
}, [formData.recorderType, options.allChannels, options.nvrChannels]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="CCTV Service Enquiry"
      className="modal-enquiry"
      overlayClassName="modal-overlay-enquiry"
    >
      <button onClick={onClose} className="modal-close-button-enquiry">
        &times;
      </button>
      <h2 className="CCTV-Enquiry-form">CCTV ENQUIRY</h2>
      <form onSubmit={handleSubmit}>
        {/* Recorder Type and Channels */}
        <div className="form-group-recorder-channel">
          {/* Recorder Type */}
          <div className="form-group">
            <label htmlFor="recorderType">Type of Recorder</label>
            <select
              id="recorderType"
              name="recorderType"
              value={formData.recorderType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              {options.recorderType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Channels */}
          <div className="form-group">
            <label htmlFor="channels">Channels</label>
            <select
              id="channels"
              name="channels"
              value={formData.channels}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              {channelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cameras */}
        <div className="form-group">
          {formData.cameras.map((camera, index) => (
            <div key={index} className="camera-group">
              <div className="form-group">
                <label htmlFor={`model-${index}`}>Camera Model</label>
                <select
                  id={`model-${index}`}
                  name="model"
                  value={camera.model}
                  onChange={(e) => handleCameraChange(index, e)}
                  required
                >
                  <option value="">Select Model</option>
                  {options.cameraModels.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor={`qty-${index}`}>Quantity</label>
                <input
                  type="number"
                  id={`qty-${index}`}
                  name="qty"
                  min="1"
                  value={camera.qty}
                  onChange={(e) => handleCameraChange(index, e)}
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => removeCameraField(index)}
                className="remove-camera-btn"
                disabled={formData.cameras.length === 1} // Disable the button if there's only one camera
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCameraField}
            className="add-camera-btn"
          >
            + Add more..
          </button>
        </div>

        {/* Storage Size */}
        <div className="form-group">
          <label>Storage Size</label>
          <div className="radio-group">
            {options.storageSize.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name="storageSize"
                  value={option.value}
                  checked={formData.storageSize === option.value}
                  onChange={handleInputChange}
                  required
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        {/* Name and Phone */}
        <div className="form-group-name-phone">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Enquiry
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Modal>
    
  );
};

export default CCTVFormModal;
