import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import Footer from "./componentes/Footer"
import GaleriaVideos from "./componentes/GaleriaVideos"
import videos from "../videos.json"
import { useState } from "react"
import ModalEditar from "./componentes/ModalEditar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NovoVideo from "./componentes/NovoVideo"

const CorDeFundo = styled.div`
  background-color: #EBE8E9;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const AppConteiner = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

const [videosDaGaleria, setVideosDaGaleria] = useState(videos.videos)
const [videoParaEditar, setvideoParaEditar] = useState(null)

function editarVideo(videoEditado){
  //atualizar o videoParaEditar com o videoEditado
  setvideoParaEditar(null)
}

function excluirVideo(videoExluido){
  console.log(`Excluir video ${videoExluido.titulo}`)
}

function criarVideo(videoNovo){
  console.log(`Video criado: ${videoNovo.titulo}`)
}

  return (
    <BrowserRouter>
      <CorDeFundo>
        <AppConteiner>
          <EstilosGlobais />
          <Header/>
          
          <Routes>
            <Route path="/" element={
              <>
                <Banner/>
                <GaleriaVideos videos={videosDaGaleria} aoClicarEditar={video => setvideoParaEditar(video)} aoClicarExcluir={videoExluido => excluirVideo(videoExluido)} />    
              </>
            } />
            <Route path="novovideo" element={<NovoVideo aoCriarVideo={videoNovo => criarVideo(videoNovo)}/>} />
          </Routes>

          <Footer/>
        </AppConteiner>
        <ModalEditar video={videoParaEditar} aoEditar={videoEditado => editarVideo(videoEditado)} aoCancelarEdicao={() => setvideoParaEditar(null)} />
      </CorDeFundo>
    </BrowserRouter>
  )
}

export default App
