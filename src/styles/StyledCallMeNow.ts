import styled from "styled-components";

export const StyledCallMeNow = styled.section`
  background-color: var(--option-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .divOne {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .consultant_img {
    width: 100px;
    border-radius: 50%;
  }

  .div_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .line_one {
    color: var(--color-grey-0);
    font-size: var(--font-size-5);
    font-weight: 600;
  }

  .line_two {
    color: var(--color-primary);
    font-size: var(--font-size-3);
    font-weight: 600;
  }

  .divTwo {
    background-color: var(--color-grey-0);
    height: 50px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }

  .text_call {
    color: var(--color-grey-2);
    font-weight: 600;
  }
`;
