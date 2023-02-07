
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};
export const ipad = (props) => {
    return css`
      @media only screen and (max-width: 760px) {
        ${props}
      }
    `;
  };

  export const ipadLarge = (props) => {
    return css`
      @media only screen and (max-width: 1024px) {
        ${props}
      }
    `;
  };
