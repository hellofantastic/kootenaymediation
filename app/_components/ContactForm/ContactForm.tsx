"use client";
import { Fragment, FormEvent, useState, CSSProperties } from "react";
import { useForm } from "react-hook-form";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import Button from "../Button/Button";

import { CustomFormProps, InputFieldProps } from "./formtypes";

import "./form.css";

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
  const handletheSubmit = async (event: FormEvent<CustomFormProps>) => {
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
      <p>Response emails back to you will come from &#x6a;&#x68;&#x40;&#x6a;&#x68;&#x6c;&#x6f;&#x2e;&#x63;&#x61;</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField label={"First Name *"} name="firstName" errors={errors} register={register} required />
        <InputField label={"Last Name *"} name="lastName" errors={errors} register={register} required />
        <InputField label={"Email *"} name="email" errors={errors} register={register} required />
        <InputField label={"Phone"} name="phone" errors={errors} register={register} />
        <MessageBox label={"Message *"} name="message" errors={errors} register={register} required />

        <Button name="Submit" />
      </form>
    </SectionWrapper>
  );
};

const inputStyles: CSSProperties = {
  border: "0",
  borderRadius: "3px",
  padding: "1.4rem 15px",
  width: "100%",
  fontFamily: "inherit",
  fontSize: "1.6rem",
  color: "#oc1e2c",
  backgroundColor: "#fff",
  appearance: "none",
  outline: "fb3a7a",
};

const InputField = ({ label, name, register, errors, required }: InputFieldProps) => {
  const emailStructure = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Fragment>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <label
          style={{
            display: "flex",
            marginBottom: "6px",
          }}
        >
          {label}
          {errors !== undefined && errors[name] ? (
            <span style={{ marginLeft: "auto", fontSize: "1rem", color: "rgb(255 0 0)" }}>
              {errors !== undefined && errors[name]?.type === "required" ? " * required" : errors !== undefined && errors[name]?.type === "properEmail" ? " * Need a properly formed email" : null}
            </span>
          ) : null}
        </label>
        <input
          {...(name === "email"
            ? {
                ...register(name, {
                  required: true,
                  validate: {
                    properEmail: (v) => emailStructure.test(v),
                  },
                }),
              }
            : { ...register(name, { required: required ? true : false }) })}
        />
      </div>
    </Fragment>
  );
};
const MessageBox = ({ label, name, register, errors, required }: InputFieldProps) => {
  return (
    <Fragment>
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <label
          style={{
            display: "flex",
            marginBottom: "6px",
          }}
        >
          {label}
          {required ? <span style={{ marginLeft: "auto", fontSize: "1rem", color: "rgb(255 0 0)" }}>{errors !== undefined && errors[name] ? " * required" : ""}</span> : null}
        </label>
        <textarea rows={8} {...register(name, { required: true })} />
      </div>
    </Fragment>
  );
};
