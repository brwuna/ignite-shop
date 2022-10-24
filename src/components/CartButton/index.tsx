import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { useCart } from "../../hooks/useCart";
import { CartButtonContainer } from "./styles";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export function CartButton({ ...rest }: CartButtonProps) {
    const {cartQuantity} = useCart();
    return (
        <CartButtonContainer {...rest}>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <Handbag weight="bold" />
        </CartButtonContainer>
    )
}