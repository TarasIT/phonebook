import React, { FC, MouseEvent, useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { filterContacts } from "../../redux/contacts/filterSlice";
import { selectContactsFilter } from "../../redux/contacts/selectors";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { Contact } from "../../types/types";
import { Loader } from "../Loader/Loader";
import {
  Name,
  ContactDeleteBtn,
  Item,
  Number,
  ContactInfo,
} from "./ContactItem.styled";

export const ContactItem: FC<Contact> = ({ name, id, number }): JSX.Element => {
  const [isContactDeleted, setIsContactDeleted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectContactsFilter);
  const isLoading = useAppSelector(selectIsLoading);

  const handleDeleteContact = (e: MouseEvent<HTMLButtonElement>) => {
    if (id === e.currentTarget.id) {
      dispatch(deleteContact(id));
      setIsContactDeleted(!isContactDeleted);
    }
    filter && dispatch(filterContacts(""));
  };

  return (
    <Item>
      <ContactInfo>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </ContactInfo>
      <ContactDeleteBtn id={id} type="button" onClick={handleDeleteContact}>
        {isLoading && isContactDeleted ? <Loader /> : "Delete"}
      </ContactDeleteBtn>
    </Item>
  );
};
