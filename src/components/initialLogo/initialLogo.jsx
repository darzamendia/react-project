import './initialLogo.css'
import kbLogo from '../../assets/keebme-logo.svg'

const InitialLogo = () => {
    return (
        <div className="LogoContainer">
            <img src={kbLogo} className="mainPageLogo" />
            <h2 className='logoTitle'>Keeb me!</h2>
        </div>
    )
}

export default InitialLogo;