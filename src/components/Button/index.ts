import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;

  max-width: 324px;
  width: 100%;
  height: 48px;

  background: var(--color-primary);
  color: var(--color-white);

  border-radius: 4px;
  border: 1px solid var(--color-primary);

  :hover {
    background-color: var(--color-primary-Focus);
  }
`;
