import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { filterContacts } from "../../redux/contacts/filterSlice";
import { selectContactsFilter } from "../../redux/contacts/selectors";
import { FilterContainer, FilterLabel, FilterBox } from "./Filter.styled";
import { FormInput } from "../../styles/styled-components/Common.styled";

export const Filter: FC = (): JSX.Element => {
  const [isFindInputFocused, setIsFindInputFocused] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(selectContactsFilter);

  useEffect(() => {
    inputValue ? setIsFindInputFocused(true) : setIsFindInputFocused(false);
  }, [inputValue, setIsFindInputFocused]);

  return (
    <FilterContainer>
      <FilterBox>
        <FilterLabel isFindInputFocused={isFindInputFocused}>
          Find a contact by name
        </FilterLabel>
        <FormInput
          type="text"
          name="filter"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(filterContacts(e.target.value.trim()));
          }}
          onFocus={() => setIsFindInputFocused(true)}
          onBlur={() => {
            inputValue
              ? setIsFindInputFocused(true)
              : setIsFindInputFocused(false);
          }}
          autoComplete="on"
          required
        />
      </FilterBox>
    </FilterContainer>
  );
};
