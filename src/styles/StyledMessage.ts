import styled from "styled-components";

export const StyledMessage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  .title_message {
    color: var(--option-3);
    font-size: var(--font-size-3);
    width: 70%;
    text-align: center;
    padding: 0 2rem;
    font-style: italic;
    line-height: 48px;
  }

  @media (min-width: 1023px) {
    .title_message {
      width: 90%;
    }
  }
`;
