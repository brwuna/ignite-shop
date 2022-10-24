import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { ButtonCartHomeContainer } from "./styles";

type ButtonCartHomeProps = ComponentProps<typeof ButtonCartHomeContainer>

export function ButtonCartHome({ ...rest }: ButtonCartHomeProps) {
    return (
        <ButtonCartHomeContainer {...rest}>
            <Handbag weight="bold" />
        </ButtonCartHomeContainer>
    )
}