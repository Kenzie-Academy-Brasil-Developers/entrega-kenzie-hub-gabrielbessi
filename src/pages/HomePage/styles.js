import styled from "styled-components";

export const SectionHomePage = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  .textName {
    display: flex;
    flex-wrap: wrap;

    width: 90vw;
    height: 118px;

    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-grey3);
    justify-content: space-evenly;
  }

  .textConted {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    height: 100vh;
    width: 90vw;

    gap: 10px;
    margin-top: 37px;
  }
`;
