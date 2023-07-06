"use client";
import { FormEvent, useState } from "react";
import Button from "../Button/Button";

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleSubmit = async (event: FormEvent<CustomForm>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("form successfully submitted", await response.json());
        // Handle success - maybe show a notification
      } else {
        console.log("submission failed");
        // Handle error - show a notification or handle error
      }
    } catch (error) {
      return error;
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Book a Consultation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="name" type="text" onChange={handleInputChange} />
        </div>
        <div>
          <input name="email" type="text" onChange={handleInputChange} />
        </div>
        <div>
          <textarea name="message" onChange={handleInputChange}></textarea>
        </div>
        <div>
          <Button name="Submit" />
        </div>
      </form>
    </>
  );
};
