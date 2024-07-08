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
`

const Footer = () => {
    return (
        <FooterEstilizado>
            <img src="/imagens/Logo.png" alt="Logo ArtFlix"/>
            <p>Projeto desenvolvido em challenge da formação <strong>ONE + Alura</strong></p>
        </FooterEstilizado>
    )
}

export default Footer