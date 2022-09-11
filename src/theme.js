import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#212529',
            light: 'skyblue',
        },
        secondary: {
            main: '#15c630',
        },
        error: {
            main: red.A400,
        },
        otherColor: {
            main: '#999',
        },
    },
});

// import { purple, red } from "@mui/material/colors"

// export const purpleTheme = createTheme({
//     palette: {
//         primary: {
//             main: purple[900]
//         },
//         secondary: {
//             main: purple[50]
//         },
//         error: {
//             main: red.A400
//         }
//     }
// })
