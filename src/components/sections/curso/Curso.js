import './curso.css'
import { cursosDatas } from '../../../data/cursos';
import CursoModelo from './CursoModelo';

function Curso() {
    return <section className='cursosDescription'>
        <div className='cursosDescriptionContainer'>
            {cursosDatas.map((curso, index) => (
                <CursoModelo
                    key={index}
                    curso={curso}
                    id={curso.titulo}
                />
            ))}
        </div>
    </section>
}

export default Curso;