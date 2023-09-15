import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

import PropTypes from 'prop-types';

const Cards = ({handleSelectButton}) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return (
        <div className="w-full mt-8 ">
           
            <div className="w-full mx-auto grid md:grid-cols-3 sm:grid-cols gap-4 ">
                {
                    cards.map((card, indx) => <Card key={indx} card={card} handleSelectButton ={handleSelectButton} ></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes ={
    handleSelectButton:PropTypes.func
}

export default Cards;