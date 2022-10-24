import { styled } from "../../styles";

export const ButtonCartHomeContainer = styled('button', {
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

    background: '$green500',
    color: '$white',

    '&:not(:disabled):hover': {
        backgroundColor: '$green300',
    },

    svg: {
        fontSize: 24,
    },

})