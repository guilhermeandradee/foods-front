import React, { useEffect, useState } from "react";
import './Main.css'

import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

import axios from "axios";
import FormPage from "./FormPage";

export const baseUrl = 'https://food-java-api.onrender.com'

const Main = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    /* Generate add card */
    const [addCardIsVisible, setCardIsVisible] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(baseUrl + '/foods');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        setIsLoading(false)
    }, []);

    console.log(data)

    return(
        <main className="cont d-flex mt-4 align-items-center justify-content-center flex-column h-50">

            <div className="row mt-4 w-100 d-flex justify-content-center">
                <button className="add-btn col-5 col-sm-2 btn btn-light rounded"  onClick={() => setCardIsVisible(true)}>Adicionar</button>
            </div>

            { addCardIsVisible && <FormPage addCardIsVisible={addCardIsVisible} setCardIsVisible={setCardIsVisible} /> }

            <div className="container-fluid ">
                <div className="row d-flex justify-content-center">
                    

                    <div className="col-10">
                        <div className="row justify-content-around">
                            
                            { data.length == 0 ? <div className="alert alert-danger text-center mt-5 fs-5 w-50">Nenhum produto cadastrado</div> : 

                            !isLoading && data.map((item) => (
                                
                                <div key={item.id} className="mx-1 col-xxl-3 col-md-3 col-sm-5 my-5 bg-danger p-0">
                                <div className="product-container flex-column p-2">
                                    <div className="img-product col">
                                        <div className="imagemmm" style={{backgroundImage: `url(${item.image})`}}>
                                            
                                        </div>
                                    </div>
                                    <div className="description mt-2 d-flex flex-column align-items-center py-2">
                                        <h3 className="item-price-h1 fs-5">{item.title}</h3>
                                        <p className="item-price m-0">R${item.price}</p>
                                    </div>
                                </div>
                            </div>

                            )) }
                        </div>
                    </div>

                    
                </div>
            </div>

        </main>
    )
}

export default Main