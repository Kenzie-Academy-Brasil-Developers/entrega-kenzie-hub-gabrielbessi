import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 22.793606671299514vw;
  height: 48px;
  background-color: var(--color-grey1);
  color: var(--color-white);

  border-radius: 4px;
  border: 1.2182px solid var(--color-grey1);
`;

export const FormBorder = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  width: 25.64280750521195vw;
  height: 502px;

  background-color: var(--color-grey3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;
