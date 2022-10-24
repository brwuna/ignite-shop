import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 6,
    position: 'relative',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },

    width: '3rem',
    height: '3rem',

    background: '$gray800',
    color: '$gray500', 

    span: {
        position: 'absolute',
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: '50%',
        top: 'calc(-1.25rem / 2)',
        right: 'calc(-1.25rem / 2)',
        color: '$gray500',
        backgroundColor: '$gray700',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    svg: {
        fontSize: 24,
    },

    // variants: {
    //     color: {
    //         gray: {
    //             background: '$gray800',
    //             color: '$gray500', 
    //         },
    //     },
    // },

    // defaultVariants: {
    //     color: 'gray',
    // },
});