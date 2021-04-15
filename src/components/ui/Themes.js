import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#004B8C";
const arcBlueLight = "#D3EAF2";
const arcOrange = "#FF6D31";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway", // Estilizando as fontes. Para importar as fontes insira no index.html do public
            textTransform: "none", // Retira todas maiuscula
            fontWeight: "700", // Negrito
            fontSize: "1rem",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: `${arcBlue}`,
            lineHeight: 1.5,
        },
    }
})