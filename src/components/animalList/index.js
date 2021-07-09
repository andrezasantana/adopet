import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css";

const AnimalList = () => {
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([])
    const [filterName, setFilterName] = useState('')
    const [filterAge, setFilterAge] = useState('')
    const [filterSex, setFilterSex] = useState('')
    const [filterSpecies, setFilterSpecies] = useState('')

    useEffect(() => {
        const getData = async () => {
            const result = await Axios.get('https://my-json-server.typicode.com/andrezasantana/pets/db')
            const data = await result.data.pets
            setPets(data)
        }
        getData()
    }, [])

    useEffect(() => {
        setFilteredPets(pets.filter(animal => {
            return animal.name.toLowerCase().includes(filterName.toLowerCase());
        }).filter(animal => {
            return (filterAge === '' || animal.age === filterAge);
        }).filter(animal => {
            return (filterSex === '' || animal.sex === filterSex);
        }).filter(animal => {
            return (filterSpecies === '' || animal.species === filterSpecies);
        }));
    }, [filterAge, filterName, filterSex, filterSpecies, pets])

    return (
        <div className="container">
            <div className="filters">
                <h3>Filtre por:</h3>

                <input className="button-filter" onChange={e => { setFilterName(e.target.value) }} placeholder="Digite um nome" />

                <select className="button-filter" defaultValue="" onChange={e => { setFilterAge(e.target.value) }}>
                    <option value="">Idade</option>
                    <option value="adulto">Adulto</option>
                    <option value="filhote">Filhote</option>
                </select>

                <select className="button-filter" defaultValue="" onChange={e => { setFilterSex(e.target.value) }}>
                    <option value="">Sexo</option>
                    <option value="fêmea">Fêmea</option>
                    <option value="macho">Macho</option>
                </select>

                <select className="button-filter" defaultValue="" onChange={e => { setFilterSpecies(e.target.value) }}>
                    <option value="">Espécie</option>
                    <option value="cachorro">Cachorro</option>
                    <option value="gato">Gato</option>
                </select>
            </div>

            <div className="card">
                {filteredPets.map(animal => (
                    <div className="card-item" key={animal.id}>
                        <img className="card-img" src={animal.image} alt="test" />
                        <h3 className="card-title">{animal.name}</h3>
                        <p className="card-details">Sexo: {animal.sex}</p>
                        <p className="card-details">Idade: {animal.age}</p>
                        <button className="button">QUERO ADOTAR</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimalList
