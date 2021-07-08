import React from 'react';
import Img from '../../assets/author.jpg'
import './style.css';

const Author = () => {
    return (
        <div className="author">
            <img src={Img} alt="foto da autora da página"></img>
            <div className="bio">
                <h2>Andreza Santana</h2>
                <p>Sou daquelas que gosta de viver e aproveitar as pequenas coisas da vida, adoro um bom café em uma dia chuvoso. Me chamo Andreza mas para os amigos é Deza.</p>
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