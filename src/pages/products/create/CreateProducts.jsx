
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Add_Product } from "../../../utils/api";
import './style.scss'
import Title from '../../../components/title/Title'
import BodyContent from "../../../components/bodyContent/BodyContent";
import Colors from "./color/Colors";
import ProductInformation from "./product_infromation/ProductInformation";
import Price from "./price/Price";
import Category from "./category/Category";
import Image from './image/Image'
import Size from "./size/Size";


const CreateProducts = () => {
    const [name, setName] = useState("")
    const [barCode, setBarCode] = useState("")

    const [colors , setColors] = useState([])

    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [date, setDate] = useState("")
    const [stock, setStock] = useState(0)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [checkErrors, setCheckErrors] = useState([false, false, false, false, false, false])
    const [images, setImages] = useState([])
    const [ size, setSize ] = useState([])

    const formSumbit = () => {
        let checkSendDateToApi = true;
        let check = [];

        name.length < 6 ? check.push(true) : check.push(false);
        description === "" ? check.push(true) : check.push(false);
        stock === 0 ? check.push(true) : check.push(false);
        barCode === "" ? check.push(true) : check.push(false);

        Add_Product(
            name,
            description,
            barCode,
            price,
            discount,
            date,
            category,
            images,
            colors,
            size
        )

    }

    console.log(images)

    const { data, loading, } = useFetch("categories");


    return (
        <>
            {data && (
                <BodyContent>
                    <Title title={"Add Product"} />
                    <div className="product">
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                            <div className="titleForm">
                                <div className="text">
                                    <h2>Add a new Product</h2>
                                    <p>Orders placed across your store</p>
                                </div>
                                <div className="buttons">
                                    <button type="button">discard</button>
                                    <button type="sumbit" onClick={() => formSumbit()} >Publish product</button>
                                </div>
                            </div>
                            <div className="grid">
                                <ProductInformation
                                    name={name}
                                    stock={stock}
                                    description={description}
                                    barCode={barCode}
                                    setBarCode={(value) => setBarCode(value)}
                                    setName={(value) => setName(value)}
                                    setStock={(value) => setStock(value)}
                                    setDescription={(value) => setDescription(value)}
                                    error={[checkErrors[0], checkErrors[1], checkErrors[2] , checkErrors[3]]}
                                />
                                <div>
                                    <Price
                                        price={price}
                                        setPrice={(value) => setPrice(value)}
                                        error={checkErrors[4]}
                                        discount={discount}
                                        setDiscount={(value) => setDiscount(value)}
                                        setDate={(value) => setDate(value)}
                                    />
                                    <Category
                                        data={data?.data}
                                        setCategory={(value) => setCategory(value)}
                                        error={[checkErrors[5]]}
                                    />
                                </div>
                            </div>
                            <Image
                                images={images}
                                setImages={(value) => setImages(value)}
                            />
                            <div className="grid">
                                <Colors setColor={value=>setColors(value)} colors={colors} />
                                <Size sizes={size} setSize={(value) => setSize(value)}/>
                            </div>
                        </form>
                    </div>
                </BodyContent>
            )}
        </>
    )
}

export default CreateProducts