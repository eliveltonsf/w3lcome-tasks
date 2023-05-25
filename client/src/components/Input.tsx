import styles from "@/styles/Input.module.scss";
import { ChangeEventHandler } from "react";

interface ErrorInput {
  status: boolean;
  message: string;
}

export interface ProfileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
  errorInput?: ErrorInput;
}

export default function Input({
  name,
  value,
  placeholder,
  onChange,
  errorInput,
  required,
}: ProfileProps) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className={`${errorInput?.status ? styles.error : styles.input}`}
      placeholder={errorInput?.status ? errorInput.message : placeholder}
      required={required}
    />
  );
}
