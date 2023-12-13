import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchContacts } from "../../redux/contacts/operations";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter/Filter";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import { Phonebook, NoContactsMessage, Title } from "./Contacts.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

const ContactsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const filteredContacts = useAppSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm />

        {contacts.length !== 0 ? (
          <>
            <Filter />
            {filteredContacts.length !== 0 ? (
              <>
                <p>contacts: {filteredContacts.length}</p>
                <ContactList children />
              </>
            ) : (
              <NoContactsMessage>No matches found</NoContactsMessage>
            )}
          </>
        ) : (
          <NoContactsMessage>
            There are no contacts yet. Please fill the form to add a new one!
          </NoContactsMessage>
        )}
      </Phonebook>
    </>
  );
};

export default ContactsPage;
