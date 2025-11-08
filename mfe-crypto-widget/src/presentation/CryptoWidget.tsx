import React from 'react';
import { CryptoWidgetCard } from './components/CryptoWidgetCard';
import { Crypto } from '../domain/entities/crypto.entity';

interface CryptoWidgetProps {
  crypto: Crypto | null;
  isLoading: boolean;
}

const CryptoWidget: React.FC<CryptoWidgetProps> = ({ crypto, isLoading }) => {

  if (isLoading) {
    return <CryptoWidgetCard children={<div>Obteniendo información de crypto...</div>} />
  }

  if (!crypto) {
    return <CryptoWidgetCard children={<div>No se encontro la crypto</div>} />
  }

  return (
    <CryptoWidgetCard>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxTGZkr-GXerNDgvhLBR4apW-6lxJDPSvXQ&s" alt={`${crypto.name} icon`} />
          <div className="ml-4">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{crypto.name}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{crypto.symbol}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">${crypto.price.toLocaleString()}</p>
          <p className={`text-sm ${crypto.change24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {crypto.change24h > 0 ? '▲' : '▼'} {crypto.change24h}%
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <p className="text-sm text-gray-600">Market Cap</p>
          <p className="text-lg font-semibold">{crypto.marketCap}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Volume (24h)</p>
          <p className="text-lg font-semibold">{crypto.change24h}</p>
        </div>
      </div>
    </CryptoWidgetCard>
  );
};



export default CryptoWidget;