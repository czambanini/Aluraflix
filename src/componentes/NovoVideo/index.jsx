import { useState } from "react"
import styled from "styled-components"
import tags from "../../tags.json"
import Botao from "../Botao"

const ContainerEstilizado = styled.main`
    padding: 60px 20%;
    background-color: #dfdbdc;
    flex-grow: 1;

    h2{
        font-family: 'SourceSansProBlack';
        text-transform: uppercase;
        color:var(--cor-principal);
        font-size: 40px;
        margin: 0px 0 10px;
        text-align: center;
    }

    h4{
        font-family: 'SourceSansProRegular';
        color: var(--cor-fonte-cinza);
        text-align: center;
        margin: 5px;
    }
    
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 60px;
    }

    .campoTexto {
        width: 48%;
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }

    .descricao {
        width: 100%;
    }

    label{
        font-family: 'SourceSansProRegular';
        font-weight: 600;
        font-size: 16px;
        color: var(--cor-fonte-cinza);
        margin: 5px 5px;
        letter-spacing: 1px;
    }

    input, select, textarea{
        margin-bottom: 15px;
        padding: 15px;
        border-radius: 7px;
        border: 1px solid var(--cor-fonte-cinza-claro);
        color: var(--cor-fonte-cinza-claro);
    }

    @media (max-width: 900px) {
        padding: 60px 8%;
    }

    @media (max-width: 570px) {
        .campoTexto {
        width: 100%;
        }

        form{
            margin-top: 20px;
        }

        input, select, textarea{
        margin-bottom: 5px;
        }
    }

`

const NovoVideo = ({ aoCriarVideo }) => {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [endereco, setEndereco] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        const videoNovo = { titulo: titulo, path: imagem, video: endereco, descricao: descricao, tagId: categoria}
        console.log('form enviado', videoNovo )
        aoCriarVideo(videoNovo)
    }

    return (
        <ContainerEstilizado>
            <h2>Novo Vídeo</h2>
            <h4>Complete o formulário para criar um novo card de vídeo.</h4>

            <form onSubmit={aoSubmeter}>
                <div className="campoTexto">
                    <label>Título</label>
                    <input
                        required
                        label="Título" 
                        type="text" 
                        placeholder="Insira o título do vídeo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="campoTexto">
                   <label>Categoria</label>
                    <select 
                        required
                        label="Categoria" 
                        value={categoria}
                        onChange={(e) => setCategoria(Number(e.target.value))}>
                        <option />
                        {tags.map(tag => <option key={tag.id} value={tag.id}>{tag.titulo}</option>)}
                    </select>
                </div>
                <div className="campoTexto">
                    <label>Imagem</label>
                    <input
                        required
                        label="Imagem" 
                        type="text" 
                        placeholder="Insira o link da imagem de capa"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    /> 
                </div>
                <div className="campoTexto">
                    <label>Vídeo</label>
                    <input
                        required
                        label="Vídeo" 
                        type="text" 
                        placeholder="Insira o link do vídeo"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    /> 
                </div>
                <div className="campoTexto descricao">
                    <label>Descrição</label>
                    <textarea
                        label="Descrição" 
                        type="text" 
                        placeholder="Sobre o que é esse vídeo?"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                    <Botao light type="reset" value="Reset">Limpar</Botao>
                    <Botao type="submit" value="Submit">Salvar</Botao>
                </form>



        </ContainerEstilizado>
    )
}

export default NovoVideo