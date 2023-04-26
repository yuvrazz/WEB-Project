import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem({ coins }) {
    return (
        <div className='home-crypto' >
            <Link to={`/${coins.id}`}>
                <span className='home-crypto-image'><img src={coins.image} alt='coin_image' /></span>
                <span className='home-crypto-name'>{coins.name}</span>
                {coins.priceBtc && (<span className='home-crypto-prices'>
                    <span className='home-crypto-btc'>
                        <img src='/bitcoin.webp' alt='cryptoCurrency' />
                        {coins.priceBtc} BTC</span>
                    <span className='home-crypto-usd'>({coins.priceUsd} USD)</span>
                </span>)}
            </Link>
        </div>
    )
}
