import styled from "styled-components"
import { CgClose } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const CardEstilizado = styled.div`
    width: 430px;
    min-width: 360px;
    min-height: 350px;
    background-color: white;
    border-radius: 15px;
    filter: drop-shadow(3px 3px 3px rgba(115,115,115,0.9));

    h3{
        margin: 5px 10px;
        font-size: 18px;
        text-transform: uppercase;
        color: var(--cor-fonte-cinza);
        font-family: 'SourceSansProBlack';
    }

    .edicaoCard{
        position: fixed;
        top: 8px;
        right: 11px;
        display: flex;
        gap: 10px;
    }
    
    img.capa{
        width: 100%;
        height: 250px;
        margin-top: 36px;
        object-fit: cover;
    }

`

const BotaoEdicao = styled.div`
    display: flex;

    p{
        margin: 0;
    }

    button{
        background-color: transparent;
        border: 0;
        display: flex;
        gap: 4px;
        align-items: center;
        color: #a5a5a5;
        font-size: 15px;
    }

    button:hover{
        color: var(--cor-fonte-cinza-claro);
    }
`

const Card = ({ video, aoClicarEditar, aoClicarExcluir }) => {
    return (
        <CardEstilizado>
            <div className="edicaoCard">
                <BotaoEdicao>
                    <button onClick={() => aoClicarExcluir(video)}>
                        <CgClose />
                        <p>Excluir</p>
                    </button>
                    <button onClick={() => aoClicarEditar(video)}>
                        <BiEdit />
                        <p>Editar</p>
                    </button>
                </BotaoEdicao>
            </div>
            <Link to={`/videos/${video.id}`}>
                <img className="capa" src={video.path} alt=""/>
                <h3>{video.titulo}</h3>
            </Link>
        </CardEstilizado>
    )
}

export default Card