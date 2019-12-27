import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const generateList = (list) => {
  const listItems = [];
  for (let i = 0; i <= list.length; i++) {
    listItems.push(<MinimalLi name={list[i]} />);
  }
  return listItems;
};

const MinimalList = styled.ul`
  column-count: ${props => (props.columns || 1)};
  list-style: none;
  margin: 1em 0;
  li {
    margin-bottom: 0 !important;
  }
`;

const MinimalLiBase = styled.li`
  margin-bottom: 0 !important;
`;

const MinimalLi = ({ name, to, external }) => {
  if (to) {
    if (external) {
      return (
        <MinimalLiBase className="small">
          <a href={to}>
            {name}
          </a>
        </MinimalLiBase>
      );
    }
    return (
      <MinimalLiBase className="small">
        <Link to={to}>
          {name}
        </Link>
      </MinimalLiBase>
    );
  }
  return (
    <MinimalLiBase className="small">{name}</MinimalLiBase>
  );
};

MinimalLi.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  external: PropTypes.bool,
};

MinimalLi.defaultProps = {
  to: null,
  external: false,
};

export default MinimalList;
export { MinimalLi, generateList };
