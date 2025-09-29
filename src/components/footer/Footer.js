import './footer.css';
import LogoSuplicy from './../../assets/img/logoSuplicy.png';
import LogoEstado from './../../assets/img/logoEstado.png';

    function Footer() {
        return <footer>
            <div className='footerContainer'>
                <div className='escolaFooter'>
                    <div className='contato'>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>85601-010, Rua São Paulo, 1135 - Centro</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-phone"></i>
                            <p>(46) 3523-2851</p>
                        </div>
                    </div>
                    <div className='suplicy'>
                        <img src={LogoSuplicy} alt='Logo Suplicy'></img>
                        <p>Colégio Estadual Dr. Eduardo Virmound Suplicy - Francisco Beltrão, PR
                            Ensino Fundamental, Médio e Profissional</p>
                    </div>
                    <div className='estado'>
                        <img src={LogoEstado} alt='Logo Estado'></img>
                    </div>
                </div>
                <div className='bryamFooter'>
                    <p>@direitos reservados a Bryam Assolini</p>
                    <p>
                        Contate (46)98400-4056
                    </p>
                </div>
            </div>
        </footer>

    }

export default Footer;