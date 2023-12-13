import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import Notiflix from "notiflix";
import { StyleSheetManager } from "styled-components";
import { addContact } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { Form } from "./ContactForm.styled";
import { Loader } from "../Loader/Loader";
import {
  Button,
  FormInput,
  FormLabel,
  InputBox,
} from "../../styles/styled-components/Common.styled";

const shouldForwardProp = (prop: string) => {
  return prop !== "isNameInputFocused" && prop !== "isNumberInputFocused";
};

export const ContactForm: FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [isContactAdding, setIsContactAdding] = useState<boolean>(false);
  const [isNameInputFocused, setIsNameInputFocused] = useState<boolean>(false);
  const [isNumberInputFocused, setIsNumberInputFocused] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsLoading);

  const isValidName = (nameValue: string): boolean => {
    const nameRegex = /^[\p{L}'\s-]+$/u;
    return nameRegex.test(nameValue);
  };

  const isValidNumber = (numberValue: string): boolean => {
    const numberRegex = /^\+?[0-9 ()-]+$/;
    return numberRegex.test(numberValue);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = name;
    const numberValue = number;

    if (!isValidName(nameValue)) {
      return Notiflix.Notify.info(
        "Name may contain only letters, apostrophe, dash and spaces",
        {
          width: "500px",
          fontSize: "20px",
        }
      );
    }

    if (!isValidNumber(numberValue)) {
      return Notiflix.Notify.info(
        "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
        {
          width: "500px",
          fontSize: "20px",
        }
      );
    }

    const sameContact = contacts.find(
      ({ name }) => name.toLowerCase() === nameValue.toLowerCase()
    );

    if (sameContact !== undefined) {
      form.reset();
      return Notiflix.Notify.info(
        `${sameContact.name} is already in contacts!`,
        {
          width: "500px",
          fontSize: "20px",
        }
      );
    }
    setIsContactAdding(true);
    await dispatch(
      addContact({
        name: nameValue,
        number: numberValue,
      })
    );
    setIsContactAdding(false);
    setName("");
    setNumber("");
    form.reset();
    setIsNameInputFocused(false);
    setIsNumberInputFocused(false);
  };

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <FormLabel isNameInputFocused={isNameInputFocused}>Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value.trim())
            }
            onFocus={() => setIsNameInputFocused(true)}
            onBlur={() => {
              name ? setIsNameInputFocused(true) : setIsNameInputFocused(false);
            }}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="on"
            required
          />
        </InputBox>
        <InputBox>
          <FormLabel isNumberInputFocused={isNumberInputFocused}>
            Number
          </FormLabel>
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value.trim())
            }
            onFocus={() => setIsNumberInputFocused(true)}
            onBlur={() => {
              number
                ? setIsNumberInputFocused(true)
                : setIsNumberInputFocused(false);
            }}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="on"
            required
          />
        </InputBox>
        <Button type="submit">
          {isContactAdding && isLoading ? <Loader /> : "Add contact"}
        </Button>
      </Form>
    </StyleSheetManager>
  );
};
