import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";
import { useCart } from "../../hooks/useCart"
import { useState } from "react";
import axios from "axios";

export function Cart() {
    const { cartItems, removeCartItem, cartItemsTotal } = useCart();

    const cartItemsQuantity = cartItems.length;

    const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(cartItemsTotal);

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleCheckout() {
        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout', {
                products: cartItems,
            });

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl
        } catch(err) {
            setIsCreatingCheckoutSession(false);
            alert('Falha ao redirecionar ao checkout!')
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton />
            </Dialog.Trigger>

            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight="bold" />
                    </CartClose>

                    <h2>Carrinho de compras</h2>
                    <section>
                        {cartItemsQuantity <= 0 && <p>No momento seu carrinho está vazio :(</p>}

                        {cartItems.map((cartItem) => (
                            <CartProduct key={cartItem.id}>
                                <CartProductImage>
                                    <Image 
                                        src={cartItem.imageUrl}
                                        width={100} 
                                        height={93} 
                                        alt="" 
                                    />
                                </CartProductImage>
                                <CartProductDetails>
                                    <p>{cartItem.name}</p>
                                    <strong>{cartItem.price}</strong>
                                    <button onClick={() => removeCartItem(cartItem.id)}>Remover</button>
                                </CartProductDetails>
                            </CartProduct>
                        ))}

                    </section>
                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>
                                    {cartItemsQuantity} {cartItemsQuantity === 1 ? 'item' : 'itens'}
                                </p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>{formattedCartTotal}</p>
                            </div>
                        </FinalizationDetails>
                        <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartItemsQuantity <= 0}>Finalizar compra</button>
                    </CartFinalization>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}