import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinsTable from '../../components/CoinsTable'

import sayHi from './actions';

class Home extends Component {
  componentDidMount() {
    this.props.sayHi();
  }
  render() {
    const { message } = this.props
    return (
      <React.Fragment>
        <h5>{message}</h5>
        <CoinsTable />
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  message: PropTypes.string,
  sayHi: PropTypes.func.isRequired,
};

Home.defaultProps = {
  message: 'Hello',
};

const mapStateToProps = state => ({
  message: state.message.greetings,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sayHi }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
