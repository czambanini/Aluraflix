import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import Footer from "./componentes/Footer"
import GaleriaVideos from "./componentes/GaleriaVideos"
import videos from "./videos.json"
import { useState } from "react"
import ModalEditar from "./componentes/ModalEditar"

const CorDeFundo = styled.div`
  background-color: #EBE8E9;
  width: 100%;
  min-height: 100vh;
`

const AppConteiner = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
`

function App() {
const [videosDaGaleria, setVideosDaGaleria] = useState(videos)
const [videoParaEditar, setvideoParaEditar] = useState(null)

function editarVideo(videoEditado){
  //atualizar o videoParaEditar com o videoEditado
  setvideoParaEditar(null)
}

function excluirVideo(videoExluido){
  console.log(`Excluir video ${videoExluido.titulo}`)
}

  return (
    <CorDeFundo>
      <AppConteiner>
        <EstilosGlobais />
        <Header/>
        <Banner/>
        <GaleriaVideos videos={videosDaGaleria} aoClicarEditar={video => setvideoParaEditar(video)} aoClicarExcluir={videoExluido => excluirVideo(videoExluido)} />
        <Footer/>
      </AppConteiner>
      <ModalEditar video={videoParaEditar} aoEditar={videoEditado => editarVideo(videoEditado)} aoCancelarEdicao={() => setvideoParaEditar(null)} />
    </CorDeFundo>
  )
}

export default App
