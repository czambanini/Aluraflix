import styled from "styled-components"
import Card from "../../Card"
import TituloGrupo from "./TituloGrupo"

const ContainerEstilizado = styled.div`
    display: flex;
    padding: 40px 30px;
    gap: 40px;
`

const GrupoCards = ({ tag, videos, aoClicarEditar, aoClicarExcluir }) => {
    return (
        <>
            <TituloGrupo $cor={tag.cor}>{tag.titulo}</TituloGrupo>
            <ContainerEstilizado>
                {videos.map(video => <Card key={video.id} video={video} aoClicarEditar={aoClicarEditar} aoClicarExcluir={aoClicarExcluir}/>)}
            </ContainerEstilizado>
        </>
    )
}

export default GrupoCards