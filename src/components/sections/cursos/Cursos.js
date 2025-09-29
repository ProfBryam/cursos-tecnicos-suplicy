import CardCurso from './CardCurso';
import './cursos.css';
import { cursosDatas } from '../../../data/cursos';

function Cursos(){
    return<section className='cursosCards'>
        <div className='cursosContainer'>
                <h1>NOSSOS CURSOS TÉCNICOS</h1>
                <div className='cardsGrind'>
                    {cursosDatas.map((curso, index) => (
                        <CardCurso 
                            key={index}
                            titulo={curso.titulo} 
                            descricao={curso.descricao}
                            senai = {curso.titulo === 'ELETROMECÂNICA' ? true : false}
                        />
                    ))}
                </div>
        </div>
    </section>
}

export default Cursos;