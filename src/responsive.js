
import {css} from "styled-components"
export const mobile=(props)=>{
    return css`
        @media only screen and (max-with:380px){
            ${props}
        }
    `
}