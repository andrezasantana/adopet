import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css";

const Card = () => {
    const [pets, setPets] = useState([])
    const [search, setSearch] = useState('')
    const [filtroPets, setFiltroPets] = useState([])

    useEffect(() => {
        const pegaDados = async () => {
            const result = await Axios.get('https://my-json-server.typicode.com/andrezasantana/pets/db')
            const dados = await result.data.pets
            setPets(dados)
        }
        pegaDados()
    }, [])

    useEffect(() => {
        setFiltroPets(
            pets.filter(animal => {
                return animal.name.includes(search)
            })
        )
    }, [search, pets])

    return (
        <div className="container">
            <input className="search" onChange={e => { setSearch(e.target.value) }} placeholder="Digite um animal" />
            <div className="card">
                {filtroPets.map(animal => (
                    <div className="card-item" key={animal.id}>
                        <img className="card-img" src={animal.image} alt="test" />
                        <h3 className="card-title">{animal.name}</h3>
                        <p className="card-details">Sexo: {animal.gender}</p>
                        <p className="card-details">Idade: {animal.age}</p>
                        <button className="button">QUERO ADOTAR</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
