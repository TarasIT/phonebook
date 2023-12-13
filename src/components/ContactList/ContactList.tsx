import React, { ReactNode, FC } from "react";
import { useAppSelector } from "../../hooks/hook";
import { ContactItem } from "../ContactItem/ContactItem";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { Item, List, MainLetter } from "./ContactList.styled";
import { Contact } from "../../types/types";

interface ContactListProps {
  children: ReactNode;
}

export const ContactList: FC<ContactListProps> = ({
  children,
}): JSX.Element => {
  const filteredContacts = useAppSelector(selectFilteredContacts).sort(
    (a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }
  );

  const groupedContacts: { [key: string]: Contact[] } = filteredContacts.reduce(
    (acc, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(contact);
      return acc;
    },
    {} as { [key: string]: Contact[] }
  );

  return (
    <List>
      {Object.entries(groupedContacts).map(([letter, contacts]) => (
        <Item key={letter}>
          <>
            <MainLetter>{letter}</MainLetter>
            <ul>
              {contacts.map(({ name, id, number }) => {
                return (
                  <ContactItem key={id} name={name} id={id} number={number} />
                );
              })}
              {children}
            </ul>
          </>
        </Item>
      ))}
    </List>
  );
};
