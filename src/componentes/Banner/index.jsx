import styled from "styled-components"

const BannerEstilizado = styled.div`
    max-height: 710px;
    
    .imgBanner{
        width: 100%;
        max-height: 710px;
        object-fit: cover;
        filter: brightness(.6);
    }

    h3{
        font-size: 46px;
    }

    h4{
        background-color: rgba(233, 233, 233, 0.7);
        padding: 10px 15px;
        border-radius: 10px;
        display: inline;
    }
`

const ConteinerEstilizado = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 50px;
    
    section {
    flex-grow: 1;
    color: white;
    font-family: 'Roboto', sans-serif;
    }
    
    img{
        max-height: 350px;
        border: 4px solid white;
        border-radius: 10px;
        flex-grow: 1;
    }
`

const Banner = () => {
    return (
        <BannerEstilizado>
        <img className="imgBanner" src="/imagens/banner.jpg" alt="Banner do site - mulher pintando entre arvores floridas" />
        <ConteinerEstilizado>
            <section>
                <h3>As flores de Tetiana Shyshkina</h3>
                <p>Acompanhe a artista uukraniana Tetiana Shyshkina em sua concepção de um quadro único ao ar livre, a artista fala sobre o uso criativo das pinceladas, da escolha das cores e técnicas de abstração.</p>
                <h4>Pintura</h4>
            </section>
            <img className="imgPreview" src="/imagens/banner.jpg" alt="Banner do site - mulher pintando entre arvores floridas" />
        </ConteinerEstilizado>
        </BannerEstilizado>
    )
}

export default Banner