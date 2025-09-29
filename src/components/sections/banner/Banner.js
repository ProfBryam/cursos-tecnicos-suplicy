import './banner.css';

function Banner() {
    return <nav className='banner'>
        <div className='gradiant'></div>
        <div className='bannerContainer'>
            <div className='topBannerContainer'>
                <div className='topBannerText'>
                    <h1>INSCRIÇÕES ABERTAS!</h1>
                    <h5>Cursos Técnicos Integrados ao Ensino Médio
                        - Inscrições de 01/10 até 15/10</h5>
                </div>
                <div className='logoTec'>
                    <div className='textLogoTec'></div>
                    <div className='iconLogoTec'></div>
                </div>
            </div>
            <div className='bottonBannerContainer'>
                <div className='cardsInscricao'>
                    <div>
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>Inscrições até 15/10</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-users"></i>
                        <p>Vagas limitadas</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-clock"></i>
                        <p>Garanta sua vaga</p>
                    </div>
                </div>
                <a
                    href="https://areadoaluno.seed.pr.gov.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='btnInscricao'
                >
                    INSCREVA-SE AGORA!
                </a>
            </div>
        </div>
    </nav>
}

export default Banner;