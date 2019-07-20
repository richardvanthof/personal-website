import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SocialButtonsBase = styled.ul`
  text-align: center;
  display: flex;
  list-style: none;
  padding: 1em;
  margin: 0;
  li {
    margin: 0;
    a {
      padding: 0.5em;
      transition: 0.1s ease;
      background: none;
      img {
        height: 1rem;
        width: 1em;
      }
      &:active {
        background: green;
      }
      &:hover {
        background: greenyellow;
      }
    }
  }
`
const profile = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  behance: "https://behance.net",
  linkedin: "https://linkedin.com",
  vimeo: "https://vimeo.com",
  youtube: "https://youtube.com",
}

const icon = {
  facebook: require("../images/icons/facebook.svg"),
  twitter: require("../images/icons/twitter.svg"),
  behance: require("../images/icons/behance.svg"),
  linkedin: require("../images/icons/linkedin.svg"),
  vimeo: require("../images/icons/vimeo.svg"),
  youtube: require("../images/icons/youtube.svg"),
}

const SocialButtons = () => {
  return (
    <SocialButtonsBase>
      <li>
        <a href={profile.facebook}>
          <img src={icon.facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href={profile.twitter}>
          <img src={icon.twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href={profile.behance}>
          <img src={icon.behance} alt="Behance" />
        </a>
      </li>
      <li>
        <a href={profile.linkedin}>
          <img src={icon.linkedin} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href={profile.vimeo}>
          <img src={icon.vimeo} alt="Vimeo" />
        </a>
      </li>
      <li>
        <a href={profile.youtube}>
          <img src={icon.youtube} alt="Youtube" />
        </a>
      </li>
    </SocialButtonsBase>
  )
}

export default SocialButtons
