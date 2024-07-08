import styled from "styled-components"

const TituloEstilizado = styled.div`
    hr{
        border: 5px solid ${props => props.cor || '#639D6C'};
        margin: 0;
        filter: drop-shadow(2px 2px 2px rgba(115,115,115,0.9));
    }
    div {
        margin-top: 0;
        margin-left: 80px;
        width: 350px;
        height: 35px;
        background-color: ${props => props.cor || '#639D6C'};
        border-radius: 0 0 15px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(2px 2px 1px rgba(115,115,115,0.9));
    }
    h2{
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: white;
        font-size: 28px;
        line-height: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`

const TituloGrupo = ({ children, cor }) => {
    return (
        <TituloEstilizado cor={cor}>
        <hr></hr>
        <div>
            <h2>{children}</h2>
        </div>
        </TituloEstilizado>
    )
}

export default TituloGrupo