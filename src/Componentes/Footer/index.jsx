import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{backgroundImage: "url(/img/Footer.png)"}}>
        <div className='redes'> 
            <a href='#'>
                <img src='/img/facebook.png' alt='Facebook'/>
            </a>
            <a href='#'>
                <img src='/img/instagram.png' alt='Instagram'/>
            </a>
            <a href='#'>
                <img src='/img/twitter.png' alt='Twitter'/>
            </a>   
        </div>
            <img src='/img/Logo.png'/>
            <strong>Desarrollado por Azael Lara</strong>
            
    </footer>
}

export default Footer