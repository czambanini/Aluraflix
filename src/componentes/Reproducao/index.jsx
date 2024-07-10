import { useParams } from "react-router-dom";
import styled from "styled-components";

const ContainerEstilizado = styled.main`
    padding: 60px 0;
    background-color: #dfdbdc;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2{
        font-family: 'SourceSansProBlack';
        text-transform: uppercase;
        color:var(--cor-principal);
        font-size: 40px;
        margin: 0px 0 10px;
        text-align: center;
    }
`

const Reproducao = ({videos}) => {
    const parametros = useParams();

    const videoEscolhido = videos.find((video) => video.id === parametros.id);

    if (!videoEscolhido) {
        return <div className="spinner">Loading...</div>;
    }

    return (
        <ContainerEstilizado>
            <h2>{videoEscolhido.titulo}</h2>
            <iframe width="80%" height="400" src={videoEscolhido.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p>{videoEscolhido.descricao}</p>
        </ContainerEstilizado>
    )
}

export default Reproducao