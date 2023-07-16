import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin:0;
    list-style:none;
    text-decoration:none
}

:root{
    --color-primary:#FF577F;
    --color-primary-negative:#59323F;
    --color-grey-0:#F8F9FA;
    --color-grey-1:#868E96;
    --color-grey-2:#343B41;
    --color-grey-3:#212529;
    --color-grey-4:#121214;
    --color-sucess-green:#3FE864;
    --color-negative-pink:#E83F5B;
    --font-size-12:12px;
    --font-size-16:16px;
    --border-radius-1:4px;
    --border-radius-2:4.06066px;


    
}
`;