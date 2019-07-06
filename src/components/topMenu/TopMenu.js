import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
  width: 230px;
  margin: 0 auto;
  background: #fefefe;
  ul {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    display: flex;
    justify-content: space-between;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: #017bff;
  a {
    text-decoration: none;
    color: #017bff;
  }
`;

export default class TopMenu extends React.Component {
  render () {
    return (
      <Menu className="topMenu">
        <ul>
          <MenuItem key={0} className="active"><Link to="/">Главная</Link></MenuItem>
          <MenuItem key={1}>
            <Link to={{
              pathname: '/edit-book',
              state: {
                status: 'add'
              }
            }}>Добавить книгу</Link>
          </MenuItem>
        </ul>
      </Menu>
    );
  }
}
