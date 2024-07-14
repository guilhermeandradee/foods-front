import React, { useEffect, useState } from "react";
import './Main.css'





import FormPage from "./FormPage";
import OptionsSobrepor from "./OptionsSobrepor";

import { CiEdit } from "react-icons/ci";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoIosExit } from "react-icons/io";

export const baseUrl = 'https://food-java-api.onrender.com'

const Main = ({ data, isLoading, fetchData }) => {

    /* Generate add card */
    const [addCardIsVisible, setCardIsVisible] = useState(false)
    
    const [selectedItemId, setSelectedItemId] = useState(null);

    console.log('selecteditem', selectedItemId)


    const handleItemClick = (id) => {
        setSelectedItemId(id)
    }

    const handleCloseOptionsClick = () => {
        setSelectedItemId(null)
        console.log('clicado')
    }


    return(
        <main className="cont d-flex mt-4 align-items-center justify-content-center flex-column h-50">

            <div className="row mt-4 w-100 d-flex justify-content-center">


                <button className="add-btn col-9 col-sm-1 col-sm-2 btn btn-light rounded mx-5 my-4 my-sm-0"  onClick={() => setCardIsVisible(true)}>Adicionar</button>


            </div>

            { addCardIsVisible && <FormPage editItem={false} addCardIsVisible={addCardIsVisible} setCardIsVisible={setCardIsVisible} /> }

            <div className="container-fluid ">
                <div className="row d-flex justify-content-center">

                    <div className="col-10">
                        <div className="row justify-content-around">
                            
                            { !isLoading && data.length === 0 ?
                            <div className="alert alert-danger text-center mt-5 fs-5 w-50">
                                Nenhum produto cadastrado
                            </div> : 

                            !isLoading && data.map((item) => (
                            <div key={item.id} className="mx-1 col-xxl-3 col-md-3 col-sm-5 my-5 bg- p-0">
                                
                                <div className="product-container flex-column p-2">

                                { !isLoading && selectedItemId === item.id && <OptionsSobrepor handleCloseOptionsClick={handleCloseOptionsClick} itemId={item.id} fetchData={fetchData} /> }


                                    <div onClick={() => handleItemClick(item.id)} className="img-product col">
                                        <div className="imagemmm" style={{backgroundImage: `url(${item.image})`}}></div>
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