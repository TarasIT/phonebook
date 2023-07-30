import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { LoginPage } from "./Login.styled";

const Login: FC = (): JSX.Element => {
  return (
    <LoginPage>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </LoginPage>
  );
};

export default Login;
