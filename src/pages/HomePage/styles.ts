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

  .textTecnology {
    display: flex;

    min-width: 300px;
    width: 55vw;
    height: 32px;

    justify-content: space-between;
    align-items: center;

    margin-top: 11px;

    button {
      display: flex;

      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;

      background-color: var(--color-grey3);
      color: var(--color-white);

      border-radius: 4px;
    }

    button:hover {
      filter: brightness(1.3);
    }
  }

  .textConted {
    display: flex;
    flex-direction: row;

    min-width: 300px;
    height: 55vh;
    width: 55vw;

    overflow-y: scroll;

    justify-content: center;
    padding: 26px;
    margin-top: 21px;

    background-color: var(--color-grey3);

    border-radius: 4px;
  }
  .textConted::-webkit-scrollbar {
    width: 10px;
    border: 1px solid var(--color-grey3);
    border-radius: 0px, 5px, 5px, 0px;
  }

  .textConted::-webkit-scrollbar-thumb {
    background-color: var(--color-grey2);
    border-radius: 0px, 5px, 5px, 0px;
  }
`;
