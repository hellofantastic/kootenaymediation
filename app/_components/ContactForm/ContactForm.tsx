"use client";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import Button from "../Button/Button";
import "./form.css";

interface CustomElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handletheSubmit = async (event: FormEvent<CustomForm>) => {
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
    <SectionWrapper width={640}>
      <h2>Book a Consultation</h2>
      <p>Response emails back to you will come from jh@jhlo.ca</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" {...register("phone", { required: true })} />
        {errors.phone && <span>This field is required</span>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" {...register("message", { required: true })} />
        {errors.message && <span>This field is required</span>}

        <Button name="Submit" />
      </form>
    </SectionWrapper>
  );
};
