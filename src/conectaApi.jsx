async function listaDeVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criarVideo(videoNovo) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: videoNovo.titulo,
            path: videoNovo.path,
            video: videoNovo.video,
            descricao: videoNovo.descricao,
            tagId: videoNovo.tagId
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

async function editarVideo(videoEditado) {
    const conexao = await fetch(`http://localhost:3000/videos/${videoEditado.id}`, {
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