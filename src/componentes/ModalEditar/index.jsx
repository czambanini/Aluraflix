import { useEffect, useState } from "react"
import styled from "styled-components"
import tags from "../../tags.json"
import { IoCloseCircleOutline } from "react-icons/io5";

const Overlay = styled.div`
    background-color: rgba(97, 97, 97, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #EBE8E9;
    width: 800px;
    padding: 50px 70px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 0;

    h2{
        font-family: 'SourceSansProBlack';
        text-transform: uppercase;
        color:#639D6C;
        font-size: 36px;
        margin: 30px 0;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    label{
        font-weight: 600;
        font-size: 16px;
        color: #5e5e5e;
        margin: 3px 0;
        letter-spacing: 1px;
    }

    input, select{
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 7px;
        border: 1px solid #8f8f8f;
        padding-left: 10px;
        color: #7a7a7a;
    }

    .botaoFechar{
        position: fixed;
        top: 11px;
        right: 9px;
        background-color: transparent;
        border: 0;
        font-size: 30px;
        color: #7a7a7a;
    }

    .botaoSalvar{
        background-color:#639D6C;
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

    .botaoSalvar:hover{
        background-color:#598f61;
    }
`

const ModalEditar = ({ video, aoEditar, aoCancelarEdicao }) => {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState()
    const [imagem, setImagem] = useState('')
    const [endereco, setEndereco] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo || '');
            setCategoria(video.tagId || '');
            setImagem(video.path || '');
            setEndereco(video.video || '');
            setDescricao(video.descricao || '');
        }
    }, [video]);

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        const videoEditado = { titulo: titulo, path: imagem, video: endereco, descricao: descricao, id: video.id, tagId: categoria}
        console.log('form enviado', videoEditado )
        aoEditar(videoEditado)
    }

    return (
        <>
        {video && <>
            <Overlay />
            <DialogEstilizado open={!!video}>
                <h2>Editar Card</h2>
                <form onSubmit={aoSubmeter}>
                    <label>Título</label>
                    <input
                        label="Título" 
                        type="text" 
                        placeholder={video.titulo} 
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                   <label>Categoria</label>
                    <select 
                        required
                        label="Categoria" 
                        value={categoria}
                        onChange={(e) => setCategoria(Number(e.target.value))}>
                        <option value="" disabled>Selecione uma categoria</option>
                        {tags.map(tag => <option key={tag.id} value={tag.id}>{tag.titulo}</option>)}
                    </select>
                    <label>Imagem</label>
                    <input
                        label="Imagem" 
                        type="text" 
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    /> 
                    <label>Video</label>
                    <input
                        label="Video" 
                        type="text" 
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    /> 
                    <label>Descrição</label>
                    <input
                        label="Descrição" 
                        type="text" 
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                    <button className="botaoSalvar">Salvar Alterações</button>
                </form>
                <form method="dialog">
                <button className="botaoFechar" onClick={() => aoCancelarEdicao()} ><IoCloseCircleOutline /></button>
                </form>
            </DialogEstilizado>
        </>}
        </>
    )
}

export default ModalEditar