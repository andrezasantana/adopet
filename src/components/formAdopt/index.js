import React from "react";
import { useParams, } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./style.css";

const FormAdopt = () => {
    const { name } = useParams();
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data);  
        alert(`Obrigada por dar um lar a ${name.toUpperCase()} em breve entraremos em contato.`)
        window.location.href='/'
    }

    return (
        <div className="main-form">
            {console.log(errors)}
            <h1>Uhuuu! Parabéns!</h1>
            <p>Para conhecer {name.toUpperCase()} o novo membro da sua família preencha os dados abaixo que iremos entrar em contato.</p>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label className="label">Nome:</label>
                <input className="input" type="text" placeholder="Fulano de Tal" name="name" {...register('name', { required: "Campo obrigatório", minLength: {value: 5, message: "Nome inválido"} })} />
                <small>{errors.name && errors.name.message}</small>
                <label className="label">Email:</label>
                <input className="input" type="text" placeholder="fulano@email.com" name="email" {...register('email', { required: "Campo obrigatório", pattern: {value: /^\S+@\S+$/i, message: "Email inválido"}})} />
                <small>{errors.email && errors.email.message}</small>
                <input className="submit" type="submit" />
            </form>
        </div>
    )
}

export default FormAdopt
