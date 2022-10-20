import styled from "styled-components";

export const TechsStyle = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 16px;

  li {
    display: flex;

    justify-content: space-between;

    align-items: center;

    min-width: 280px;
    width: 50vw;
    height: 49px;
    padding: 13px;

    background-color: var(--color-grey4);

    border-radius: 4px;

    cursor: pointer;

    div {
      display: flex;

      align-items: center;

      gap: 25px;
    }

    button {
      display: flex;

      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;

      color: var(--color-white);
    }

    button:hover {
      filter: brightness(1.8);
    }
  }

  li:hover {
    background-color: var(--color-grey2);
  }
`;
