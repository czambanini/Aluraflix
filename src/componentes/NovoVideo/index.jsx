import { useState } from "react"
import styled from "styled-components"
import tags from "../../tags.json"

const ContainerEstilizado = styled.main`
    padding: 60px 20%;
    background-color: #dfdbdc;
    flex-grow: 1;
    
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 70px;
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
        font-weight: 600;
        font-size: 16px;
        color: #5e5e5e;
        margin: 3px 0;
        letter-spacing: 1px;
    }

    input, select, textarea{
        margin-bottom: 15px;
        padding: 15px;
        border-radius: 7px;
        border: 1px solid #8f8f8f;
        padding-left: 10px;
        color: #7a7a7a;
    }

    h2{
        font-family: 'SourceSansProBlack';
        text-transform: uppercase;
        color:#639D6C;
        font-size: 40px;
        margin: 0px 0 10px;
        text-align: center;
    }

    h4{
        text-align: center;
        margin: 5px;
    }

    button{
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
    }

    button:hover{
        background-color:#598f61;
    }

    .botaoLimpar{
        background-color:#a2c0a7;
    }

    .botaoSalvar{
        background-color:#639D6C;
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
            <h2>Novo Video</h2>
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
                    <label>Video</label>
                    <input
                        required
                        label="Video" 
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
                    <button className="botaoLimpar">Limpar</button>
                    <button className="botaoSalvar">Salvar</button>
                </form>

        </ContainerEstilizado>
    )
}

export default NovoVideo