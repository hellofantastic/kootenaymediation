"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { Ring } from "@uiball/loaders";

//App
import { BackgroundContainer } from "../Container/BackgroundContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";
import Button from "../Button/Button";

import { FormValues, InputFieldProps } from "./formtypes";
import "./form.css";

const SuccessMessageSend = "Thank you, your message has been recieved.";

export const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const resetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        setSubmitSuccess(true);
        resetForm();
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      setSubmitting(false);
      //Likely network
      return error;
    }
  };

  return (
    <BackgroundContainer borderTop>
      <InnerWidthContainer width="640px" id="consultation">
        <Image
          src="/images/couple_sitting_1.png"
          alt="Image of couple sitting"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "100%",
            maxWidth: "640px",
            height: "auto",
            margin: "0 auto",
            display: "flex",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        />
        <Box display={"flex"} flexDir="column" justifyContent="center">
          <Heading size="xl">Book a Consultation</Heading>
          <Text fontSize={["md", "lg"]} pb="1.5rem">
            Please provide the following information.{" "}
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField label={"First Name *"} name="firstName" errors={errors} register={register} required />
            <InputField label={"Last Name *"} name="lastName" errors={errors} register={register} required />
            <InputField label={"Email *"} name="email" errors={errors} register={register} required />
            <InputField label={"Phone"} name="phone" errors={errors} register={register} />
            <MessageBox label={"Describe your circumstances *"} name="message" errors={errors} register={register} required />
            <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
              <GridItem>
                <Button name="Send" backgroundcolor="f0ac77" disabled={isSubmitting ? true : false} />
              </GridItem>
              <GridItem display="flex" alignItems="center">
                {isSubmitting === true ? (
                  <>
                    <span style={{ marginRight: "10px", fontStyle: "italic" }}>{"Sending "}</span> <Ring color="#79b4b7" />
                  </>
                ) : null}
                {submitSuccess ? SuccessMessageSend : null}
              </GridItem>
            </Grid>
          </form>
        </Box>
      </InnerWidthContainer>
    </BackgroundContainer>
  );
};

const InputField = ({ label, name, register, errors, required }: InputFieldProps) => {
  const emailStructure =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Fragment>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Text
          as="label"
          htmlFor={name}
          fontSize={["md", "lg"]}
          style={{
            display: "flex",
            marginBottom: "6px",
          }}
        >
          {label}
          {errors !== undefined && errors[name] ? (
            <span style={{ marginLeft: "auto", fontSize: "1rem", color: "rgb(255 0 0)" }}>
              {errors !== undefined && errors[name]?.type === "required"
                ? " * required"
                : errors !== undefined && errors[name]?.type === "properEmail"
                ? " * Need a properly formed email"
                : null}
            </span>
          ) : null}
        </Text>
        <input
          id={name}
          {...(name === "email"
            ? {
                ...register(name, {
                  required: true,
                  validate: {
                    properEmail: (v: string) => emailStructure.test(v),
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
        <Text
          as="label"
          htmlFor={name}
          fontSize={["md", "lg"]}
          style={{
            display: "flex",
            marginBottom: "6px",
          }}
        >
          {label}
          {required ? (
            <span style={{ marginLeft: "auto", fontSize: "1rem", color: "rgb(255 0 0)" }}>
              {errors !== undefined && errors[name] ? " * required" : ""}
            </span>
          ) : null}
        </Text>
        <textarea
          id={name}
          placeholder={"Provide as much information as you feel comfortable with to give me an idea of your situation or circumstances."}
          rows={8}
          {...register(name, { required: true })}
        />
      </div>
    </Fragment>
  );
};
