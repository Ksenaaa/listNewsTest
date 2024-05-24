import { TypographyInterface } from "model/typographyInterface";
import { Colors } from "./Colors";

export const TypographyStyles: TypographyInterface = {
    bold: {
        fontWeight: '700',
        fontSize: 24,
        color: Colors.black
    },
    semobold: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 23,
        color: Colors.black
    },
    regular: {
        fontWeight: '400',
        fontSize: 17,
        color: Colors.black
    },
    light: {
        fontWeight: '300',
        fontSize: 16,
        color: Colors.black
    },
    extraLight: {
        fontWeight: '200',
        fontSize: 12,
        lineHeight: 17,
        color: Colors.black
    }
}
