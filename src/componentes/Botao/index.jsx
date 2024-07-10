import styled from "styled-components"


const BotaoEstilizado = styled.button`
    background-color: ${props => props.$light ? "var(--cor-principal-light)" : "var(--cor-principal)" };
    border: 0;
    border-radius: 10px;
    width: 40%;
    margin: 30px auto;
    text-transform: uppercase;
    font-family: 'SourceSansProBlack';
    letter-spacing: 1px;
    color: white;
    padding: 10px;
    filter: drop-shadow(1px 1px 2px rgba(128, 128, 128, 0.7));

    &:hover{
        background-color:var(--cor-principal-hover);
    }
`

const Botao = ({children, light = false}) => {
    return (
        <BotaoEstilizado $light={light}>{children}</BotaoEstilizado>
    )
}

export default Botao