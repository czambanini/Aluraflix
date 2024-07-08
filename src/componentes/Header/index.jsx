import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const HeaderEstilizado = styled.header`
    height: 90px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EBE8E9;
    filter: drop-shadow(16px 16px 20px #EBE8E9);

    img{
        width: 200px;
        filter: drop-shadow(3px 3px 3px #a19d9d);
    }

    button{
        width: 150px;
        height: 90px;
        margin: -1px;
        background-color: transparent;
        border: 0;
        border-left: 2px solid white;
        border-right: 2px solid white;
        font-family: 'SourceSansProBlack';
        color: white;
        font-size: 20px;
        line-height: 24px;
    }
    button:hover{
        text-decoration: underline 3px;
    }

    button.active{
        background: radial-gradient(circle, transparent 0%, rgba(115,115,115,0.3) 130%);
    }
`

const Header = () => {
    const localizacao = useLocation();

    return (
        <HeaderEstilizado>
        <img src="/imagens/Logo.png" alt="Logo ArtFlix"/>
        <div>
            <Link to="/">
                <button className={`${localizacao.pathname === "/" ? "active" : "" }`}>HOME</button>
            </Link>
            <Link to="/novovideo">
                <button className={`${localizacao.pathname === "/novovideo" ? "active" : "" }`} >NOVO VÍDEO</button>
            </Link>
        </div>
        </HeaderEstilizado>
    )
}

export default Header