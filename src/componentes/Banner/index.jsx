import styled from "styled-components"

const BannerEstilizado = styled.div`
    display: flex;
    position: static;
    align-items: center;
    justify-content: center;
    
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

    @media (max-width: 1000px) {
        h3{
        font-size: 30px;
        }
    }

    @media (max-width: 570px) {
        display: none;
    }
`

const ContainerEstilizado = styled.div`
    position: absolute;
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 50px;

    section {
        flex-shrink: 1;
        color: white;
        font-family: 'Roboto', sans-serif;
        }
    
    img{
        flex-shrink: 1;
        max-width: 550px;
        min-width: 200px;
        margin: 1px;
        border: 4px solid white;
        border-radius: 10px;
    }

    @media (max-width: 570px) {
        display: none;
    }
`

const Banner = () => {
    return (
        <BannerEstilizado>
        <img className="imgBanner" src="/imagens/banner.jpg" alt="Banner do site - mulher pintando entre arvores floridas" />
        <ContainerEstilizado>
            <section>
                <h3>O desabrochar das flores de Madrid</h3>
                <p>Acompanhe a artista ucraniana Tetiana em sua concepção de um quadro único ao ar livre, a artista fala sobre o uso criativo das pinceladas, da escolha das cores e técnicas de abstração.</p>
                <h4>Pintura</h4>
            </section>
            <img className="imgPreview" src="/imagens/banner.jpg" alt="Banner do site - mulher pintando entre arvores floridas" />
        </ContainerEstilizado>
        </BannerEstilizado>
    )
}

export default Banner