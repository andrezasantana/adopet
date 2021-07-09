import React from 'react';
import Img from '../../assets/author.jpg'
import './style.css';

const Author = () => {
    return (
        <div className="author">
            <img src={Img} alt="foto da autora da página"></img>
            <div className="bio">
                <h2>O Projeto</h2>
                <p>AdoPet é um projeto de conclusão do curso de Front-end da Reprograma! Foi criado com o objetivo de aproximar as pessoas que querem adotar um pet e os peludos de quatro patas mais fofos do mundo. Buscando incentivar a adoção, e desestimular o mercado de venda de animais. Afinal amigo não se compra!</p>
                <h2>A Autora</h2>
                <p>Meu nome é Andreza Santana. Sou daquelas que gosta de viver e aproveitar as pequenas coisas da vida. Desenvolvedora Front-end formada pela Reprograma.</p>
                <div>
                    <a href="https://www.instagram.com/deza.santanna/" target="_blank" rel="noreferrer">Instagram |</a>
                    <a href="https://www.linkedin.com/in/andreza-santana-7a4009a2/" target="_blank" rel="noreferrer">Linkedin|</a>
                    <a href="https://github.com/andrezasantana" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Author;