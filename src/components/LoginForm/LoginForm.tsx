import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Notiflix from "notiflix";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { Loader } from "../Loader/Loader";
import { logIn } from "../../redux/auth/operations";
import { errorReset } from "../../redux/auth/authSlice";
import { selectError, selectIsLoading } from "../../redux/auth/selectors";
import { EmailLabel, InputBox, PasswordLabel } from "./LoginForm.styled";
import {
  Button,
  FormInput,
  Form,
  ShowPasswordBtn,
  ShowPasswordIcon,
  HidePasswordIcon,
} from "../../styles/styled-components/Common.styled";

export const LoginForm: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailInputFocused, setIsEmailInputFocused] =
    useState<boolean>(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] =
    useState<boolean>(false);
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [isUserLogIn, setIsUserLogIn] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      Notiflix.Notify.info(
        "User validation failed. Please, check your email or password!",
        {
          width: "500px",
          fontSize: "20px",
        }
      );
      dispatch(errorReset(null));
    }
    email ? setIsEmailInputFocused(true) : setIsEmailInputFocused(false);
    password
      ? setIsPasswordInputFocused(true)
      : setIsPasswordInputFocused(false);
  }, [
    error,
    errorReset,
    dispatch,
    email,
    password,
    setIsEmailInputFocused,
    setIsPasswordInputFocused,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsUserLogIn(false);
    await dispatch(
      logIn({
        email,
        password,
      })
    );
    setIsUserLogIn(true);
    setEmail("");
    setPassword("");
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <EmailLabel isEmailInputFocused={isEmailInputFocused}>Email</EmailLabel>
        <FormInput
          type="email"
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value.trim());
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
        <PasswordLabel isPasswordInputFocused={isPasswordInputFocused}>
          Password
        </PasswordLabel>
        <FormInput
          type={isPasswordShown ? "text" : "password"}
          name="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value.trim());
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
        {isLoading && !isUserLogIn ? <Loader /> : "Log In"}
      </Button>
    </Form>
  );
};
