"use client";
import { Fragment, useState, CSSProperties } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, GridItem } from "@chakra-ui/react";
import { Ring } from "@uiball/loaders";

//App
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import Button from "../Button/Button";
import useBreakpointLeftorRight from "@/app/_hooks/useBreakpointLeftorRight";
import { FormValues, InputFieldProps } from "./formtypes";
import "./form.css";

export const ContactForm = () => {
  const alignLeftOrRight = useBreakpointLeftorRight();

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
    <SectionWrapper width={640} id="book-appointment">
      <h2>Book a Consultation</h2>
      <p>Please provide the following information. </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField label={"First Name *"} name="firstName" errors={errors} register={register} required />
        <InputField label={"Last Name *"} name="lastName" errors={errors} register={register} required />
        <InputField label={"Email *"} name="email" errors={errors} register={register} required />
        <InputField label={"Phone"} name="phone" errors={errors} register={register} />
        <MessageBox label={"Message *"} name="message" errors={errors} register={register} required />
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
          <GridItem>
            <Button name="Submit" disabled={isSubmitting ? true : false} />
          </GridItem>
          <GridItem display="flex" alignItems="center" justifyContent={alignLeftOrRight}>
            {isSubmitting === true ? (
              <>
                <span style={{ marginRight: "10px", fontStyle: "italic" }}>{"Sending "}</span> <Ring color="#79b4b7" />
              </>
            ) : null}
            {submitSuccess ? "Thank you, your request has been recieved." : null}
          </GridItem>
        </Grid>
      </form>
    </SectionWrapper>
  );
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
