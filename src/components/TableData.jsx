/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-spacing */
import React, { useEffect, useState } from 'react';
import getData from '../utils/getData';

const ApiBaseUrl = 'https://api.scryfall.com/cards/search?order=cmc&q=';

const TableData = ({ data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      data.forEach(async (element) => {
        const cardData = await getData(`${ApiBaseUrl}${element.Name}`);
        setCards((cards)=>{
          const list = [
            ...cards,
            cardData.data[0],
          ];
          console.log(cardData.data[0]);
          return list;
        });
        // cardsArray.push(cardData.data[0]);
      });
    };

    fetchMyAPI();
  }, [data]);


  return (
    (
      <table>
        <thead>
          <tr style={{ background: 'lightblue', fontWeight: 'bold', textAlign: 'center' }}>
            <td>Card Name</td>
            <td>Img url</td>
            <td>Card Uri</td>
            <td>Legal in commander</td>
            <td>Rarity</td>
            <td>USD</td>
            <td>Oracle Text</td>
            <td>Mana Cost</td>
            <td>Type Line</td>
            <td>Power</td>
            <td>Toughness</td>
            <td>Rarity</td>
          </tr>
        </thead>
        <tbody>
          {
            cards.map((card)=> {
              const { image_uris, legalities, prices } = card;
              const { large: imgUrl } = image_uris || '';
              const { commander } = legalities || '';
              const { usd } = prices || '';
              return (
                <tr key={card.oracle_id}>
                  <td>{card.name}</td>
                  <td>{imgUrl}</td>
                  <td>{card.uri}</td>
                  <td>{commander}</td>
                  <td>{card.rarity}</td>
                  <td>{usd}</td>
                  <td>{card.oracle_text}</td>
                  <td>{card.mana_cost}</td>
                  <td>{card.type_line}</td>
                  <td>{card.power}</td>
                  <td>{card.toughness}</td>
                  <td>{card.rarity}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    )
  );
};

export default TableData;
