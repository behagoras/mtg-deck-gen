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
      const cardsArray = [];

      data.forEach(async (element) => {
        const cardData = await getData(`${ApiBaseUrl}${element.Name}`);
        cardsArray.push(cardData);
      });

      await setCards(cardsArray);
    };
    fetchMyAPI();
  }, []);


  console.log(cards);
  return (
    (
      <table>
        <thead>
          <tr>
            <td>Card Name</td>
          </tr>
        </thead>
        <tbody>
          {
            cards.map((card)=> (
              <tr>
                <td>
                  Helo
                  {card.data[0].name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  );
};

export default TableData;
