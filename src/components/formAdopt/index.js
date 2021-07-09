import React from "react";
import { useParams, } from "react-router-dom";

import "./style.css";

const FormAdopt = () => {
    let { name } = useParams();

    return (
        <div className="main-form">
            <h1>Uhuuu! Parabéns</h1>
            <p>Para conhecer {name.toUpperCase()} o novo membro da sua família preencha os dados abaixo que iremos entrar em contato.</p>
            <form className="form">
                <label className="label">Nome:</label>
                <input className="input" type="text" placeholder="Fulano de Tal" name="name" />
                <label className="label">Email:</label>
                <input className="input" type="text" placeholder="fulano@email.com" name="email" />
                <input className="submit" type="submit" />
            </form>
        </div>
    )
}

export default FormAdopt
