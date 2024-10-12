import { alpha, createTheme } from "@mui/material";

export const theme = createTheme({palette: {success: {main: alpha('#00FF00', .2)}, error: {main: alpha('#FF0000', .2)}, info: {main: alpha('#C4C4C4', .2)}}});