import styled from "styled-components"
import GrupoCards from "./GrupoCards"
import tags from "../../tags.json"


const ContainerEstilizado = styled.main`
    
`

const GaleriaVideos = ({ videos = [], aoClicarEditar, aoClicarExcluir }) => {

    return (
        <ContainerEstilizado>
            {tags.map( tag => <GrupoCards key={tag.id} tag={tag} videos={videos.filter(video => video.tagId === tag.id)} aoClicarEditar={aoClicarEditar} aoClicarExcluir={aoClicarExcluir} />)}
        </ContainerEstilizado>
    )
}

export default GaleriaVideos