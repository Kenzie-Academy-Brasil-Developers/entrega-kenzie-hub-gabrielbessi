import styled from "styled-components";

export const ModalUpdateTechs = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.6);

  .closeModal {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    min-width: 300px;
    width: 25vw;
    height: 5vh;

    padding: 20px;

    background-color: var(--color-grey2);

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    button {
      color: white;
    }
  }

  .container {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;

    background-color: var(--color-grey3);
    color: var(--color-white);
    min-width: 300px;
    width: 25vw;
    height: 40vh;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    .containerButtons {
      display: flex;

      margin-top: 20px;
      gap: 22px;
    }

    .buttonSave {
      display: flex;

      align-items: center;
      justify-content: center;

      min-width: 160px;
      width: 14.166666666666666vw;
      height: 48px;

      background-color: var(--color-primary-Negative);
      color: var(--color-white);

      border-radius: 4px;
    }

    .buttonDelete {
      display: flex;

      align-items: center;
      justify-content: center;

      width: 98px;
      height: 48px;

      background-color: var(--color-grey1);
      color: var(--color-white);

      border-radius: 4px;
    }
  }
`;
