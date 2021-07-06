import React from "react";
import Img from "../../assets/banner.svg"
import "./style.css"

const Banner = () => {
    return (
        <div className='main'>
            <div>
                <h1>AdoPet</h1>
                <p>Seja bem-vindo! Aqui você vai conhecer o novo membro da sua familía &#10084;</p>
            </div>
            <img src={Img} alt='Ilustração de pets' />
        </div>
    )
}

export default Banner;
