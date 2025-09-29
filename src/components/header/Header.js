import './header.css';

function Header() {
    return <header>
        <div className='headerContainer'>
            <div className='suplicySize'>
                <div className='imgSuplicy'></div>
                <div className='textSuplicy'>
                    <h2>EDUARDO VIRMOND SUPLICY</h2>
                    <h6>Francisco Beltrão - PR</h6>
                </div>
            </div>
            <div className='estadoSize'></div>
        </div>
    </header>
}

export default Header