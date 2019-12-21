import { css } from 'styled-components';

export const fadeIn = css`
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
