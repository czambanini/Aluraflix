async function listaDeVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criarVideo() {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            path: path,
            video: video,
            descricao: descricao,
            tagId: tagId
        })
    })
    if(!conexao.ok) {
        throw new Error("Não foi possível salvar item")
    }
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function deletarVideo(id) {
    const conexao = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    if(!conexao.ok) {
        throw new Error("Não foi possível excluir o item")
    }
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function editarVideo(id, videoEditado) {
    const conexao = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(videoEditado)
    })
    if(!conexao.ok) {
        throw new Error("Não foi possível editar o item")
    }
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaDeVideos, criarVideo, deletarVideo, editarVideo
}