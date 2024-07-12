import React from "react";
import './FormPage.css'
import axios from "axios";

import { IoIosCloseCircleOutline } from "react-icons/io";


import { useState } from "react";

import { baseUrl } from "./Main";

const FormPage = ({addCardIsVisible, setCardIsVisible}) => {


    const [formData, setFormData] = useState({
            "title": '',
            "price": '',
            "image": ''
        });

        
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        console.log(formData)
    };

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post(`${baseUrl}/foods`, formData);
            console.log('Resposta do servidor:', response.data);

            setFormData({
                title: '',
                price: '',
                image: ''
            });

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div className="form-page rounded row m-0 p-0">
            
            <form className="px-0 py-2 col-8 col-md-8 d-flex flex-column justify-content-center" >
                <div className="mb-3 ">
                    <label
                     htmlFor="name" className="form-label text-light">Nome</label>
                    <input
                    placeholder="Banana"
                        type="text"
                        className="form-control"
                        id="name"
                        name="title"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label text-light">Preço</label>
                    <input
                    placeholder="12,5"
                        type="float"
                        className="form-control"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label text-light">Imagem</label>
                    <input
                    placeholder="https://urldaimagem.com"
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="enviar-btn p-2 rounded w-50 mt-4" onClick={handleSubmit}>Enviar</button>
                <IoIosCloseCircleOutline className="exit-add-btn mt-5" onClick={() => setCardIsVisible(false)} />
            </form>
            
        </div>
    )
}

export default FormPage