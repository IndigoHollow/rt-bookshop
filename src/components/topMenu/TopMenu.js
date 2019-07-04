import React from 'react';
import { Link } from "react-router-dom";

import './TopMenu.css';

export default class TopMenu extends React.Component {
  render () {
    return (
      <div className="topMenu">
        <ul>
          <li key={0} className="active"><Link to="/">Главная</Link></li>
          <li key={1}><Link to={{
            pathname: '/edit-book',
            state: {
              status: 'add'
            }
          }}>Добавить книгу</Link></li>
        </ul>
      </div>
    );
  }
}
