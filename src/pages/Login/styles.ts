import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 20%;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  min-width: 280px;
  width: 22.793606671299514vw;
  height: 48px;
  background-color: var(--color-grey1);
  color: var(--color-white);

  border-radius: 4px;
  border: 1.2182px solid var(--color-grey1);

  :hover {
    filter: brightness(1.2);
  }
`;

export const FormBorder = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;

  min-width: 300px;
  width: 25.64280750521195vw;
  height: 502px;

  margin-top: 35px;

  background-color: var(--color-grey3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 18px;
    font-weight: 700;
    color: var(--color-white);

    margin-bottom: 28px;
  }

  div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 10px;

    button {
      display: flex;
      flex-direction: column;

      margin-top: 24px;
    }
  }

  span {
    display: flex;
    flex-direction: column;

    font-size: 12px;
    font-weight: 600;
    color: var(--color-grey1);

    margin-top: 34px;
    margin-bottom: 22px;
  }
`;
