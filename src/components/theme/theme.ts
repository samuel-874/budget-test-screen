import { extendTheme }  from "@chakra-ui/react";

const appColors ={
    blue: "#0466C8",
    lightBlue: "#0466C833",
    gray: "#707480",
    black: "#001233"
}

const theme = extendTheme({appColors})
export { theme as default }