import React, { ReactNode, FC } from "react";
import { useAppSelector } from "../../hooks/hook";
import { ContactItem } from "../ContactItem/ContactItem";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { List } from "./ContactList.styled";

interface ContactListProps {
  children: ReactNode;
}

export const ContactList: FC<ContactListProps> = ({
  children,
}): JSX.Element => {
  const filteredContacts = useAppSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactItem key={id} name={name} id={id} number={number} />;
      })}
      {children}
    </List>
  );
};
