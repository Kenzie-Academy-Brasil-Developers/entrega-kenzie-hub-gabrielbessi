import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkRegistration = styled(Link)`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-size: 12px;
  font-weight: 600;

  width: 64.49px;
  height: 40.11px;

  color: var(--color-white);
  background-color: var(--color-grey3);
  border-radius: 4px;

  :hover {
    filter: brightness(1.2);
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 39px;

  margin-top: 15%;
`;

export const FormRegistration = styled.section`
  .textRegistration {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    justify-content: space-around;

    width: 166px;
    height: 90px;

    margin-bottom: 10px;

    p {
      font-size: 18px;
      font-weight: 700;
      color: var(--color-white);
    }

    span {
      font-size: 12px;
      font-weight: 400;
      color: var(--color-grey1);
    }
  }
  display: flex;
  flex-direction: column;

  justify-content: center;

  min-width: 300px;
  width: 25.64280750521195vw;
  height: 891.19px;

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

    align-items: flex-start;

    gap: 10px;

    button {
      display: flex;
      flex-direction: column;

      margin-top: 25px;
    }
  }
`;
