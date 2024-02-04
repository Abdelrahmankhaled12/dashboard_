
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


const CreateProducts = () => {
    const [product_name, setProduct_name] = useState("")
    const [product_barCode, setBarCode] = useState("")

    const [product_priceOld, setProduct_priceOld] = useState(0)
    const [product_priceNew, setProduct_priceNew] = useState(0)
    const [product_stock, setProduct_stock] = useState(0)
    const [product_description, setProduct_description] = useState("")
    const [product_category, setProduct_category] = useState("")
    const [checkErrors, setCheckErrors] = useState([false, false, false, false, false, false])
    const [cards, setCards] = useState([])

    const formSumbit = () => {
        let checkSendDateToApi = true;
        let check = [];
        product_name.length < 6 ? check.push(true) : check.push(false);
        product_description === "" ? check.push(true) : check.push(false);
        product_stock === 0 ? check.push(true) : check.push(false);
        product_priceOld === 0 ? check.push(true) : check.push(false);
        product_priceNew === 0 ? check.push(true) : check.push(false);
        product_category === "" ? check.push(true) : check.push(false);


        Add_Product(
            product_name,
            product_description,
            product_barCode,
            product_priceOld,
            product_priceNew,
            product_stock,
            product_category,
            cards,
            []
        )

    }

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
                                    product_name={product_name}
                                    product_stock={product_stock}
                                    product_description={product_description}
                                    product_barCode={product_barCode}
                                    setBarCode={(value) => setBarCode(value)}
                                    setProduct_name={(value) => setProduct_name(value)}
                                    setProduct_stock={(value) => setProduct_stock(value)}
                                    setProduct_description={(value) => setProduct_description(value)}
                                    error={[checkErrors[0], checkErrors[1], checkErrors[2]]}
                                />
                                <div>
                                    <Price
                                        product_priceOld={product_priceOld}
                                        product_priceNew={product_priceNew}
                                        setProduct_priceOld={(value) => setProduct_priceOld(value)}
                                        setProduct_priceNew={(value) => setProduct_priceNew(value)}
                                        error={[checkErrors[3], checkErrors[4]]}
                                    />
                                    <Category
                                        data={data?.data}
                                        setProduct_category={(value) => setProduct_category(value)}
                                        error={[checkErrors[5]]}
                                    />
                                </div>
                            </div>
                            <Image
                                cards={cards}
                                setCards={(value) => setCards(value)}
                            />
                        </form>
                    </div>
                </BodyContent>
            )}
        </>
    )
}

export default CreateProducts