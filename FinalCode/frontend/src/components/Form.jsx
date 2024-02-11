import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error: ", error);
          setLocation({ error: "Unable to retrieve location." });
        }
      );
    } else {
      setLocation({ error: "Geolocation not supported." });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle response if needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Redirect to the home page after form submission
    navigate("/");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Report</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
        rel="stylesheet"
      />
      <div
        className="container"
        style={{ fontFamily: '"Bricolage Grotesque"' }}
      >
        <div className="navbar navbar-expand-lg ">
          <div
            className="navbar-brand mx-auto my-2"
            style={{ fontSize: "2.5em", fontWeight: 700, color: "#080A45" }}
          >
            BIOSCOPE
          </div>
        </div>
        <div>
          <p
            style={{
              fontSize: "1.5em",
              fontWeight: 600,
              color: "#080A45",
              marginLeft: "0.5em",
              marginBottom: "1em",
            }}
          >
            SOS Report
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group my-0">
              <label
                htmlFor="issue"
                className="col-sm-2 col-form-label"
                style={{ color: "#080A45", fontSize: "1.05em" }}
              >
                Issue
              </label>
              <select
                name="issue"
                id="issue"
                className="col-sm-4 p-1"
                style={{ color: "#222684" }}
                required=""
              >
                <option value="" disabled="" selected="" hidden="">
                  Select your issue
                </option>
                <option value="Poaching Sighting">Poaching Sighting</option>
                <option value="Violence against animals">
                  Violence against animals
                </option>
                <option value="Illegal deforestation">
                  Illegal deforestation
                </option>
                <option value="Illegal trade of animals">
                  Illegal trade of animals
                </option>
                <option value="Microplastics">Microplastics</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div
              className="form-group my-1"
              style={{ color: "#080A45", fontSize: "1.05em" }}
            >
              <label htmlFor="location" className="col-sm-2 col-form-label">
                Location
              </label>
              <button
                type="button"
                onClick={getLocation}
                className="px-3 py-2"
                style={{
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "#F1DDD9",
                }}
              >
                {" "}
                Get Location.!
              </button>
              <p id="location" style={{ color: "#222684" }} className="ml-3">
                {location.error ||
                  (location.latitude && (
                    <>
                      Latitude: {location.latitude} <br></br>
                Longitude:{" "}
                      {location.longitude}
                    </>
                  ))}
              </p>
            </div>
            <div
              className="form-group my-1"
              style={{ color: "#080A45", fontSize: "1.05em" }}
            >
              <label htmlFor="dateAndTime" className="col-sm-2 col-form-label">
                Date and Time
              </label>
              <input
                type="datetime-local"
                name="dateAndTime"
                id="dateAndTime"
                style={{ color: "#222684" }}
                className=" p-1"
                required=""
              />
            </div>
            <div
              className="form-group my-1"
              style={{ color: "#080A45", fontSize: "1.05em" }}
            >
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description
              </label>
              <textarea
                name="address"
                id="address"
                cols={30}
                rows={3}
                placeholder="Enter description"
                style={{ color: "#222684" }}
                className=" p-1"
                required=""
                defaultValue={""}
              />
            </div>
            <div
              className="form-group my-1"
              style={{ color: "#080A45", fontSize: "1.05em" }}
            >
              <label htmlFor="evidence" className="col-sm-2 col-form-label">
                Evidence
              </label>
              <input
                type="file"
                name="evidence"
                id="evidence"
                style={{ color: "#222684", border: "none", borderRadius: 5 }}
              />
              <br />
              <small className="ml-3">It is optional to provide evidence</small>
            </div>
            <div
              className="form-group my-1"
              style={{ color: "#080A45", fontSize: "1.05em" }}
            >
              <label htmlFor="identity" className="col-sm-2 col-form-label">
                Identity
              </label>
              <div className="radio" required="">
                <div className="anonymous" style={{ color: "#222684" }}>
                  <input
                    type="radio"
                    id="anonymous"
                    name="identity"
                    defaultValue="Anonymous"
                    className="ml-3"
                  />
                  <label htmlFor="anonymous">Anonymous</label>
                </div>
                <div className="identified" style={{ color: "#222684" }}>
                  <input
                    type="radio"
                    id="identified"
                    name="identity"
                    defaultValue="Identified"
                    className="ml-3"
                  />
                  <label htmlFor="identified">Identified</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="py-2 px-4 ml-3"
              style={{
                border: "none",
                borderRadius: 5,
                backgroundColor: "#F1DDD9",
              }}
            >
              Submit.!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
