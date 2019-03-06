import React from 'react';

const CoinsTable = ({ coin }) =>{
  const imgLink = `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`
  return (
    <li className="collection-item avatar">
      <img src={imgLink} alt="icon" className="circle" />
      <span className="title">{coin.CoinInfo.FullName}</span>
      <p>{coin.CoinInfo.Name}
        {coin.RAW.USD.PRICE}
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
  )
};
export default CoinsTable;
