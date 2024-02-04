/* eslint-disable react/prop-types */
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './card/Card';
import update from 'immutability-helper'
import { useCallback } from 'react';
import './style.scss'
const Cards = ({ cards , setCards}) => {

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setCards((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
    }, [])

    const renderCard = useCallback(
        (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    img={card.img}
                    moveCard={moveCard}
                    name={card.name}
                    size={card.size}
                />
            )
        },
        [],
    )

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="cardsImages">
                {cards.map((card, i) => renderCard(card, i))}
            </div>
        </DndProvider>
    )
}

export default Cards