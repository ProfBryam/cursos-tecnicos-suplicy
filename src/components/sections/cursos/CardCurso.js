import './cardCurso.css';

function CardCurso({titulo, senai, descricao}){
    return<div className='cardContainer'>
        <h2>{titulo}</h2>
        {senai? <button className='senai'>Integrado ao SENAI</button> : <></>}
        <p>{descricao}</p>
        <a href={`#${titulo}`} className='saibaMais'>Saiba Mais</a>
    </div>
}

export default CardCurso;