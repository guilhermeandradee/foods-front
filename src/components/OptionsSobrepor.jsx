import React, { useState } from "react";

import "./OptionsSobrepor.css"
import { baseUrl } from "./Main";
import axios from "axios";

import { CiEdit } from "react-icons/ci";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoIosExit } from "react-icons/io";

import FormPage from "./FormPage";


const OptionsSobrepor = ({ handleCloseOptionsClick, itemId, fetchData }) => {

    const [editCardisVisible, setEditCardIsVisible] = useState(false)

    const changeCardIsVisible = () => {
        setEditCardIsVisible(true)
    }

    const changeCloseCard = () => {
        setEditCardIsVisible(false)
    }

    const removeItem = async (id) => {
        try {
            const response = await axios.delete(`${baseUrl}/foods/${id}`)

            console.log(response.data)
            fetchData()
            
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    }

    return(
        <div className="div-excluir-item d-flex flex-column align-items-center justify-content-around px-4">
            <h3 className="brown-color fs-5 fs-sm-4 option-btn" onClick={() => changeCardIsVisible()}>Editar <CiEdit/> </h3>
            <h3 className="brown-color fs-5 fs-sm-4 option-btn" onClick={() => handleCloseOptionsClick()}> Sair <IoIosExit/> </h3>
            <h3 className="brown-color fs-5 fs-sm-4 option-btn" onClick={() => removeItem(itemId)} >Remover <IoRemoveCircleOutline/> </h3>

            { editCardisVisible && 
                <FormPage editItem={true} itemId={itemId} changeCloseCard={changeCloseCard} />
            }
        </div>
    )
}

export default OptionsSobrepor