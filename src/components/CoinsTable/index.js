import React from 'react';


const CoinsTable = ({ coin }) =>{
  const {
    IMAGEURL,
    FULLNAME,
    NAME,
    PRICE,
    TOTALVOLUME24HTO,
    MKTCAP} = coin.DISPLAY.USD
  const imgLink = `https://www.cryptocompare.com${IMAGEURL}`
  return (
    <tbody>
      <tr>
        <td  className="icon"><img src={imgLink} alt="icon" className="circle" /></td>
        <td>{FULLNAME}<br />{NAME}</td>
        <td>{PRICE}</td>
        <td>{TOTALVOLUME24HTO}</td>
        <td>{MKTCAP}</td>
      </tr>
    </tbody>
  )
};
export default CoinsTable;
