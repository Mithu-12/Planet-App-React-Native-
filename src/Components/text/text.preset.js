import { colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const BASE = {
    fontFamily: Typography.primary,
    color: colors.white,
    fontSize: 16
}
const BASE_BOLD = {
    fontFamily: Typography.primaryBold,
    // fontWeight: "bold",
    color: colors.white,
    fontSize: 16
}
const BOLD = {
    fontFamily: Typography.bold,
    color: colors.white,
    // fontWeight: "bold",
}
export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 20,
    },
    h5: {
        ...BASE_BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize: 12
    }
}