import React from "react";
import styles from "./FindACar.module.css";
import axios from "axios";
import FormData from "form-data";
// import { useEffect } from "react";
import { useState } from "react";
import carsData from "../../../src/MOCK_DATA.json";
// console.log(carsData);

export const FindACar = () => {
  const [image, setImage] = useState(null);
  const [cars, setCars] = useState(carsData);
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");

  const handleFileUpload = (e) => {
    setCars(carsData);
    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);
    setImage(formData);
  };

  const handleSubmit = async () => {
    await axios
              .post("http://localhost:3001/car", image)
              .then((res) => setResponse(res.data))
              .catch((err) => console.log(err));

    console.log(response);

    if (response !== null) {
      setCars(cars.filter((data) => data.type === `${response}`));
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);

    if (e.target.value === "") {
      setCars(carsData);
    }
  };

  const searchHandler = () => {
    console.log("clicked");
    setCars(cars.filter((data) => data.model === userInput));

    if (userInput === "") {
      setCars(carsData);
    }
  };

  return (
    <div className={styles.search_container}>
      <div className={styles.wrapper}>
        <div className={styles.input_search}>
          <input
            type="text"
            placeholder="Search car models.."
            onChange={(e) => handleChange(e)}
            value={userInput}
          ></input>
          <div className={styles.search_btn} onClick={searchHandler}>
            Search
          </div>
          <label htmlFor="file">Upload image</label>
          <input
            id="file"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => handleFileUpload(e)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className={styles.search_content}>
          {cars.map((data, index) => (
            <div className={styles.map_container} key={index}>
              <div className={styles.mapped_items} key={index}>
                <img src={data.image} alt="ImageOfCar"></img>
                <div className={styles.car_info}>
                  <ul>
                    <li>
                      {data.carYear} {data.make} {data.model}
                    </li>
                    <li>Price: $ {data.price}</li>
                    <li>Location: {data.location}</li>
                  </ul>
                  <div className={styles.card_btns}>
                    <button>View car</button>
                    <button>Book a test drive</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
