/* eslint-disable react/prop-types */
import { MDBInput } from 'mdb-react-ui-kit';
import Card from './cardImages/Card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState, useCallback } from 'react';
import update from 'immutability-helper'

const Image = ({ cards, setCards }) => {
    const [imagesAdd, setImagesAdd] = useState([])
    const [product_image, setProduct_image] = useState("")



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
                />
            )
        },
        [],
    )

    const imageAdd = () => {
        setImagesAdd([...imagesAdd, {
            id: imagesAdd.length + 1,
            img: product_image,
        },])
        setCards([...imagesAdd, {
            id: imagesAdd.length + 1,
            img: product_image,
        },])
        setProduct_image("")
    }


    return (
        <div className="grid">
            <div className="div">
                <h2>Images</h2>
                <div className="form">
                    <MDBInput
                        label='Image'
                        id='Image'
                        type='texxt'
                        className={product_image === "" ? "empty" : ""}
                        onChange={(e) => setProduct_image(e.target.value)}
                        value={product_image}
                    />
                    <button className="styleButton" onClick={() => imageAdd()}>add</button>
                </div>
            </div>
            <div className="div">
                <DndProvider backend={HTML5Backend}>
                    <div className="cardsImages">
                        {cards.map((card, i) => renderCard(card, i))}
                    </div>
                </DndProvider>
            </div>
        </div>
    )
}

export default Image