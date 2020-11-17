import React, { Component } from 'react';
import User from './User';

import css from './user.module.css';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisivle: 0,
    };

    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { secondsVisivle } = this.state;
      this.setState({
        secondsVisivle: secondsVisivle + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { users } = this.props;
    const { secondsVisivle } = this.state;

    return (
      <div>
        <p>Componente visível por {secondsVisivle} segundos</p>
        <ul className={css.lista}>
          {users.map((user) => {
            return (
              <li key={user.login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
