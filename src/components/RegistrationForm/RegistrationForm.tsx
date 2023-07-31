import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Notiflix from "notiflix";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { Loader } from "../Loader/Loader";
import { errorReset } from "../../redux/auth/authSlice";
import { regist } from "../../redux/auth/operations";
import { selectError, selectIsLoading } from "../../redux/auth/selectors";
import { InputBox } from "./RegistrationForm.styled";
import {
  Button,
  FormInput,
  Form,
  ShowPasswordBtn,
  ShowPasswordIcon,
  HidePasswordIcon,
  FormLabel,
} from "../../styles/styled-components/Common.styled";

export const RegistrationForm: FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isNameInputFocused, setIsNameInputFocused] = useState<boolean>(false);
  const [isEmailInputFocused, setIsEmailInputFocused] =
    useState<boolean>(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] =
    useState<boolean>(false);
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [isUserRegist, setIsUserRegist] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error !== null) {
      Notiflix.Notify.info(
        "Invalid data input. Please, check your email and password length!",
        {
          width: "250px",
          fontSize: "20px",
        }
      );
      dispatch(errorReset(null));
    }
    name ? setIsNameInputFocused(true) : setIsNameInputFocused(false);
    email ? setIsEmailInputFocused(true) : setIsEmailInputFocused(false);
    password
      ? setIsPasswordInputFocused(true)
      : setIsPasswordInputFocused(false);
  }, [
    error,
    errorReset,
    dispatch,
    name,
    email,
    password,
    setIsNameInputFocused,
    setIsEmailInputFocused,
    setIsPasswordInputFocused,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsUserRegist(false);
    await dispatch(
      regist({
        name,
        email,
        password,
      })
    );
    setIsUserRegist(true);
    setName("");
    setEmail("");
    setPassword("");
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <FormLabel isNameInputFocused={isNameInputFocused}>Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          onFocus={() => setIsNameInputFocused(true)}
          onBlur={() => {
            name ? setIsNameInputFocused(true) : setIsNameInputFocused(false);
          }}
          autoComplete="on"
          required
        />
      </InputBox>
      <InputBox>
        <FormLabel isEmailInputFocused={isEmailInputFocused}>Email</FormLabel>
        <FormInput
          type="email"
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          onFocus={() => setIsEmailInputFocused(true)}
          onBlur={() => {
            email
              ? setIsEmailInputFocused(true)
              : setIsEmailInputFocused(false);
          }}
          autoComplete="on"
          required
        />
      </InputBox>
      <InputBox>
        <FormLabel isPasswordInputFocused={isPasswordInputFocused}>
          Password
        </FormLabel>
        <FormInput
          type={isPasswordShown ? "text" : "password"}
          name="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          onFocus={() => setIsPasswordInputFocused(true)}
          onBlur={() => {
            password
              ? setIsPasswordInputFocused(true)
              : setIsPasswordInputFocused(false);
          }}
          autoComplete="on"
          required
        />
        <ShowPasswordBtn
          type="button"
          onFocus={() => setIsPasswordInputFocused(true)}
          onBlur={() => {
            password
              ? setIsPasswordInputFocused(true)
              : setIsPasswordInputFocused(false);
          }}
          onClick={() => setIsPasswordShown(!isPasswordShown)}
        >
          {isPasswordShown ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </ShowPasswordBtn>
      </InputBox>
      <Button type="submit">
        {isLoading && !isUserRegist ? <Loader /> : "Regist"}
      </Button>
    </Form>
  );
};
