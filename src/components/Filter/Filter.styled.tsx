import styled from "styled-components";
import { FormLabel } from "../../styles/styled-components/Common.styled";

interface FormLabelProps {
  isFindInputFocused: boolean;
}

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 280px;
  margin-bottom: 30px;
`;

export const FilterBox = styled.div`
  position: relative;
`;

export const FilterLabel = styled(FormLabel)<FormLabelProps>`
  top: ${({ isFindInputFocused }) => (isFindInputFocused ? "-15px" : "5px")};
  font-size: ${({ isFindInputFocused }) =>
    isFindInputFocused ? "14px" : "18px"};
`;
