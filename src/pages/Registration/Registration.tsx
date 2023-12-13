import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { RegistrationPage } from "./Registartion.styled";

const Regist: FC = (): JSX.Element => {
  return (
    <RegistrationPage>
      <Helmet>
        <title>Registration on Phonebook</title>
      </Helmet>
      <RegistrationForm />
    </RegistrationPage>
  );
};

export default Regist;
