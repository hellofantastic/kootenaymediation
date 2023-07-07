import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

export interface CustomElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLInputElement;
}

export interface CustomFormProps extends HTMLFormElement {
  readonly elements: CustomElements;
}

export type InputFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
};
