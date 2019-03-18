import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CoinsTable from '../../components/CoinsTable'
import { Card, Table } from 'react-materialize'

import fetchTopTen from './actions';

class Home extends Component {
  static defaultProps = {
    results: [],
  };

  componentDidMount() {
    this.props.fetchTopCoins();
  }

  renderCoins = () => {
    const results = this.props.coins.payload.Data;
    return results.map((coin, index) => (
      <CoinsTable coin={coin} key={index} />
      ));
  }

  render() {
    const { isFetching, success } = this.props.coins;
    if (success && !isFetching) {
      return (
        <Card className="container center-align">
          <Table className="top-coins bordered hoverable">
            <thead>
              <tr>
                <th data-field="icon" className="icon"></th>
                <th data-field="name">Name</th>
                <th data-field="name">Price(USD)</th>
                <th data-field="name">Total Volume</th>
                <th data-field="price">Mkt Cap</th>

              </tr>
            </thead>
            {this.renderCoins()}
          </Table>
        </Card>
      )
    } else {
      return (
        <Card className="max-width center-align">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        </Card>
      )
    }
  }
}

Home.propTypes = {
  coins: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
    errors: PropTypes.object,
  }).isRequired,
  fetchTopCoins: PropTypes.func.isRequired,
};

const mapStateToProps = ({coins}) => ({
  coins,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchTopCoins: fetchTopTen,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
