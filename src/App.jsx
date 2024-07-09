import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import Footer from "./componentes/Footer"
import GaleriaVideos from "./componentes/GaleriaVideos"
import { useEffect, useState } from "react"
import ModalEditar from "./componentes/ModalEditar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NovoVideo from "./componentes/NovoVideo"
import { conectaApi } from "./conectaApi"

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
const [videosDaGaleria, setVideosDaGaleria] = useState([])
const [videoParaEditar, setvideoParaEditar] = useState(null)

useEffect(() => {
  const videosApi = async () => {
    const videos = await conectaApi.listaDeVideos();
    setVideosDaGaleria(videos);
  }
  videosApi()
}, [])

const editarVideo = async (videoEditado) => {
    await conectaApi.editarVideo(videoEditado)
    setVideosDaGaleria((videosAtualizados) =>
      videosAtualizados.map((video) => video.id === videoEditado.id ? videoEditado : video))
    setvideoParaEditar(null)
}

const excluirVideo = async(videoExluido) => {
    await conectaApi.deletarVideo(videoExluido.id)
    setVideosDaGaleria((videosAtualizados) =>
      videosAtualizados.filter((video) => video.id !== videoExluido.id))
}

const criarVideo = async (videoNovo) => {
    await conectaApi.criarVideo(videoNovo)
    setVideosDaGaleria((videosAtualizados) => [...videosAtualizados, videoNovo])
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
