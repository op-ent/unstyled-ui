import { Color } from "../../../types/base";
import type { ButtonProps, ButtonSize, ButtonVariant } from "../../../types/components/button";
import buttonGhost from "./buttonGhost";
import buttonOutline from "./buttonOutline";
import buttonSolid from "./buttonSolid";

export interface ButtonStyleTypes {
    defaultProps?: Omit<ButtonProps, "children"> & { as?: string}
    styles?: {
        base?: {
            initial?: string;
            block?: string;
        },
        sizes?: Record<ButtonSize, string>,
        variants?: Record<ButtonVariant, Record<Color, string>>
    }
}

export const button: Required<ButtonStyleTypes> = {
    defaultProps: {
        as: "button",
        variant: "solid",
        size: "md",
        color: "neutral",
        block: false,
        disabled: false,
        loading: false,
    },
    styles: {
        base: {
            initial: "",
            block: ""
        },
        sizes: {
            sm: "",
            md: "",
            lg: ""
        },
        variants: {
            solid: buttonSolid,
            outline: buttonOutline,
            ghost: buttonGhost,
        }
    }
}

export default button;