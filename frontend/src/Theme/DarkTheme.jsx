import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#264d4d",
        },
        secondary:{
            main:"#5A20CB"
        },
        black:{
            main:"#2442b2e"
        },
        background:{
            main:"#000000",
            default:"#0D0D0D",
            paper:"0D0D0D"
        },
        textColor:{
            main:"#111111"
        }

    }
})