import { styled } from "styled-components";

export const StyledPhasesWork = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);

  .div_title_phases {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-4);
    margin-bottom: 3rem;
    font-weight: 800;
  }

  .title_phases {
    text-align: center;
    margin: 1.5rem 0;
    line-height: 42px;
  }

  .phases_list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .phase_item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #a0a0a0;
    min-height: 200px;
    width: 20rem;
    height: max-content;
    margin: 1rem;
    border-radius: 40px;
    color: var(--color-grey-2);
    color: var(--color-grey-2);
  }

  .title_item {
    font-size: var(--font-size-4);
    font-weight: 800;
    margin: 0.5rem;
  }

  .content_item {
    text-align: center;
    font-weight: 500;
  }

  @media (min-width: 1023px) {
    margin: 6rem;

    .div_title_phases {
      font-size: var(--font-size-1);
    }

    .title_item {
      font-size: var(--font-size-3);
    }

    .content_item {
      font-size: var(--font-size-6);
    }
  }
`;
