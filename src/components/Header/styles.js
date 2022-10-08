import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;

  justify-content: space-around;
  align-items: center;

  width: 90vw;
  height: 72px;
`;

export const LinkHome = styled(Link)`
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
