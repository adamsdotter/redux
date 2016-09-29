import React from "react"
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

@connect((store) => {
    return {
      user: store.user.user,
      userFetched: store.user.fetched,
      tweets: store.tweets.tweets
    }
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
  };
  render() {
    const user = this.props.user;
    return (
      <div>
        <h1>{user.name}</h1>
        <h3>Age: {user.age}</h3>
      </div>
    );
  }
}
