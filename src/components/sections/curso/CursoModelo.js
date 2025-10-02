import './cursoModelo.css';
// import ImgurGallery from '../../galeria/Galery';

function CursoModelo({ curso, id }) {
    const abrirGaleria = (link) => {
        window.open(link, '_blank');
    };
    return <div className='secaoCurso' id={id}>
        <div className='infosCurso'>
            <div className='textsCurso'>
                <h1>{curso.titulo}</h1>
                {
                    curso.titulo === 'ELETROMECÂNICA'
                        ? <h5>Integrado ao SENAI</h5>
                        : <></>
                }
                <p>{curso.descricao}</p>
            </div>
            <img src={curso.icone} alt='Icone do Curso'></img>
        </div>
        <div className='cardsCurso'>
            <div className='card'>
                <div className='infosCard'>
                    <i class="fa-solid fa-book-open"></i>
                    <h4>Conteúdos estudados</h4>
                </div>
                <ul className="lista-conteudos">
                    {curso.conteudos.map((conteudo, index) => (
                        <li key={index}>{conteudo}</li>
                    ))}
                </ul>
            </div>
            <div className='card'>
                <div className='infosCard'>
                    <i class="fa-solid fa-briefcase"></i>
                    <h4>Áreas de atuação</h4>
                </div>
                <ul className="lista-trabalhos">
                    {curso.trabalhos.map((trabalho, index) => (
                        <li key={index}>{trabalho}</li>
                    ))}
                </ul>
            </div>
            <div className='card cardExtra' onClick={() => { abrirGaleria(curso.linkGaleria) }}>
                <div className='iconCamera'>
                    <i class="fa-solid fa-camera"></i>
                </div>
                <div
                    className='galery'
                    style={
                        {
                            backgroundImage: `url(${curso.galeria})`
                        }
                    }>
                    {/* <img src={curso.galeria} alt='Img Curso'></img> */}
                </div>
                <div className='icons-extra'>
                    {curso.titulo === 'DESENVOLVIMENTO DE SISTEMAS'
                        ?
                        <div>
                            <i class="fa-solid fa-trophy"></i>
                            <h5>Competições</h5>
                        </div>
                        :
                        <></>
                    }
                    <div>
                        <i class="fa-solid fa-location-dot icon-location"></i>
                        <h5>Visitas Técnicas</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CursoModelo;