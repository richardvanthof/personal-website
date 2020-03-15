import { css } from 'styled-components';

const fadeIn = css`
    animation: fadeIn 0.3s;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(0, 1em);
        }
        to {
            opacity: 1;
            transform: translate(0, 0);
        }
    };
`;

const hover = css`
    @keyframes hover {
        0% {
        transform: translateY(0)
        }
        50% {
        transform: translateY(0.3em)
        }
        100% {
        transform: translateY(0)
        }
    }
`;

// eslint-disable-next-line import/prefer-default-export
export { fadeIn, hover };
