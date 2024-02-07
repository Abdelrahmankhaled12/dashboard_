/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './style.scss'
import Loading from '../loading/Loading';


const ItemTypes = {
    CARD: 'card',
}

const Card = ({ id, img, index, moveCard , name , size }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset.y - hoverBoundingRect.top);

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => ({ id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className='cardImage'>
            <div className="element">
                <div className="image">
                    <div className="img">
                        <img width={220} height={150} src={img} alt="" />
                        <div className="loading">
                            <Loading />
                        </div>
                    </div>
                    <div className="text">
                        <p>
                            {name}
                        </p>
                        <span>{size}KB</span>
                    </div>
                    <button type='button'>Remove file</button>
                </div>
            </div>
        </div>
    );
};

export default Card;