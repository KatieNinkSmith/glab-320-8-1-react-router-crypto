import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Price(props) {
  const apiKey = "E6E30E6B-C753-4D77-8C81-1B1826D5D0B8";

  const params = useParams();
  const symbol = params.symbol;

  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.assest_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>loading...</h1>;
  };
  return coin && coin.rate ? loaded() : loading();
}

export default Price;
