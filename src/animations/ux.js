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

// eslint-disable-next-line import/prefer-default-export
export { fadeIn };
