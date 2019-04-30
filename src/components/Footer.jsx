import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import SocialButtons from "./SocialButtons";

const FooterBase = styled.footer`
    padding: 1em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
        margin: 0;
    }
`

const Footer = () => {
    return (
        <FooterBase>
            <hr/>
            <p>Copyright Richard van 't Hof 2019</p>
            <SocialButtons/>
        </FooterBase>
    )
}

export default Footer;