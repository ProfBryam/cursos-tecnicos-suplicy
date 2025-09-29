import './inscrevasse.css';
import QRCodeIMG from './../../../assets/img/qrcode.png'

function Inscrevasse() {
    return <section className='inscricao'>
        <div className='inscricaoContainer'>
            <h1>FAÇA SUA INSCRIÇÃO</h1>
            <div className='infosInscricao'>
                <div className='textInscricao'>
                    <h4>Não perca essa oportunidade!</h4>
                    <p>As vagas são limitadas e as inscrições estão abertas
                        apenas até 15 de outubro. Garante já a sua vaga para
                        participar da seletiva dos cursos técnicos.</p>
                    <div>
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>Período: 01/10 até 15/10</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-users"></i>
                        <p>Vagas limitadas</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-clock"></i> 
                        <p>Inscrição obrigatória para seletiva</p>
                    </div>
                </div>
                <div className='qrcodeInscricao'>
                    <h3>Escaneie o QR Code</h3>
                    <img src={QRCodeIMG} alt='QRcode da Inscrição'></img>
                    <a 
                        href="https://areadoaluno.seed.pr.gov.br" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        Ou acesse: www.areadoaluno.seed.pr.gov.br
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default Inscrevasse;