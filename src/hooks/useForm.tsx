import React from "react";

type FormEmailType = {
  regex: RegExp;
  message: string;
};

type FormNumberType = {
  regex: RegExp;
  message: string;
};

interface FormTypes {
  email?: FormEmailType;
  number?: FormNumberType;
}

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  number: {
    regex:
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
    message: "Digite seu o número do seu celular ou fixo com ou sem o DDD",
  },
} as FormTypes;

export const useForm = (type: keyof FormTypes | undefined) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value: string) {
    if (type === undefined) {
      return true;
    }

    if (value.length === 0) {
      setError("Preencha o campo corretamente.");
      return false;
    }

    if (types[type]?.message && !types[type]?.regex.test(value)) {
      setError(types[type]!.message);
      return false;
    }

    setError("");
    return true;
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
