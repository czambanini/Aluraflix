import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const FooterEstilizado = styled.footer`
    background-color: #639D6C;
    height: 80px;
    position: relative;
    bottom: 0;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 130px;
    }

    p{
        font-size: 10px;
        margin: 0px;
    }

    .navegacao{
        display: none;
    }

    @media (max-width: 570px) {
        height: 50px;
        position: fixed;


        img {
            display: none;
        }
        p {
            display:none
        }
        .navegacao {
            display: flex;
            width: 80%;

            a{
            display: flex;
            flex: 1;
            text-decoration: none;
            }

            button{
            flex: 1;
            height: 30px;
            margin: -1px;
            background-color: transparent;
            border: 0;
            border-left: 2px solid white;
            border-right: 2px solid white;
            font-family: 'SourceSansProBlack';
            color: var(--cor-secundaria-1);
            font-size: 20px;
            line-height: 24px;
            }
            button:hover{
                text-decoration: underline 3px;
            }

            button.active{
                color: white;
            }
        }
    }
`

const Footer = () => {
    const localizacao = useLocation();

    return (

        <FooterEstilizado>
            <img src="/imagens/Logo.png" alt="Logo ArtFlix"/>
            <p>Projeto desenvolvido em challenge da formação <strong>ONE + Alura</strong></p>
            <div className="navegacao">
            <Link to="/">
                <button className={`${localizacao.pathname === "/" ? "active" : "" }`}>HOME</button>
            </Link>
            <Link to="/novovideo">
                <button className={`${localizacao.pathname === "/novovideo" ? "active" : "" }`} >NOVO VÍDEO</button>
            </Link>
            </div>
        </FooterEstilizado>
    )
}

export default Footer