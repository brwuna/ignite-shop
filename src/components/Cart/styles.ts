import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog"

export const CartContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '30rem',
    padding: '3rem',
    paddingTop: '4.5rem',
    background: '$gray800',
    boxShadow: '-4px, 8px, 30px rgba(0, 0, 0, 0.8)',

    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontWeight: 700,
        fontSize: '$lg',
        color: '$gray100',
        marginBottom: '2rem',
    },

    '> section': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        flex: 1,
        overflowY: 'auto',
    }
});

export const CartClose = styled(Dialog.Close, {
    background: 'none',
    border: 'none',
    color: '$gray500',
    position: 'absolute',
    top: '1.75rem',
    right: '1.75rem',
});

export const CartProduct = styled('div', {
    width: '100%',
    height: '5.8125rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
});

export const CartProductImage = styled('div', {
    width: '6.3125rem',
    height: '5.8125rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%);',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

    img: {
        objectFit: 'cover',
    }
});

export const CartProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.125rem',
    height: '100%',

    p: {
        color: '$gray300',
        fontSize: '$lg',
    },
    
    strong: {
        marginTop: 4,
        fontSize: '$md',
        fontWeight: 700,
    },

    button: {
        marginTop: 'auto',
        width: 'max-content',
        color: '$green500',
        background: 'transparent',
        border: 'none',
        fontSize: '1rem',
        fontWeight: 700,
    }
});

export const FinalizationDetails = styled('section',{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 55,

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        p: {
            fontSize: '$md',
            color: '$gray300',
        },
    
        '&:last-child': {
            fontWeight: 700,
    
            span: {
                fontSize: '$md',
            },
    
            p: {
                color: '$gray100',
                fontSize: '$xl',
            },
        }
    },

})

export const CartFinalization = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',

    button: {
        width: '100%',
        height: '4.3125rem',
        background: '$green500',
        color: '$white',
        border: 'none',
        borderRadius: 8,
        fontSize: '$md',
        fontWeight: 700,

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            background: '$green300',
        }
    },
});