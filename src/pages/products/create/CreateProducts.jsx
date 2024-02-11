
import { useState } from "react";
import './style.scss'
import Title from '../../../components/title/Title'
import BodyContent from "../../../components/bodyContent/BodyContent";
import Colors from "./color/Colors";
import ProductInformation from "./product_infromation/ProductInformation";
import Price from "./price/Price";
import Category from "./category/Category";
import Image from './image/Image'
import Size from "./size/Size";
import { SendProductAddApi } from "../functions";
import Swal from 'sweetalert2/dist/sweetalert2.js'


const CreateProducts = ({ data }) => {
    const [name, setName] = useState("")
    const [barCode, setBarCode] = useState("")
    const [colors, setColors] = useState([])
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [date, setDate] = useState("")
    const [stock, setStock] = useState(0)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [checkErrors, setCheckErrors] = useState([false, false, false, false, false, false])
    const [images, setImages] = useState([])
    const [size, setSize] = useState([])

    const formSumbit = () => {
        let checkSendDateToApi = true;
        let check = [];

        name.length < 6 ? check.push(true) : check.push(false);
        description === "" ? check.push(true) : check.push(false);
        stock === 0 ? check.push(true) : check.push(false);
        barCode === "" ? check.push(true) : check.push(false);

        let productData = {
            name,
            category,
            barCode,
            price,
            colors,
            description,
            stock,
            images,
            size,
            date,
            discount
        }

        if (checkSendDateToApi) {
            Swal.fire({
                title: "Are you sure?",
                text: `Are you sure you want to add this product?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Add"
            }).then((result) => {
                if (result.isConfirmed) {
                    SendProductAddApi(productData)
                        .then(responseData => {
                            if (responseData.status === 201) {
                                Swal.fire({
                                    title: "Added!",
                                    text: `The new product has been added`,
                                    icon: "success"
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.reload();
                                    }
                                })
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        });
                }
            });
        }

    }


    return (
        <>
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
                                error={[checkErrors[0], checkErrors[1], checkErrors[2], checkErrors[3]]}
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
                            <Colors setColor={value => setColors(value)} colors={colors} />
                            <Size sizes={size} setSize={(value) => setSize(value)} />
                        </div>
                    </form>
                </div>
            </BodyContent>
        </>
    )
}

export default CreateProducts