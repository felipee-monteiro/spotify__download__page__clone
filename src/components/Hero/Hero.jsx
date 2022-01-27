import {SubTitle, Title, Wrapper, SubWrapper, DownloadButton} from "./styles";

function Hero(){
    return (
        <>
           <Wrapper>
              <SubWrapper>
                <img src="https://www-growth.scdn.co/static/download/laptop.svg" alt="Laptop" class="DownloadComputer__Computer-wxrydg-1 iedzgj" />
                <Title>Baixe o Spotify</Title>
                <SubTitle>Escute milhões de músicas e podcasts no seu dispositivo.</SubTitle>
                <DownloadButton><a href="#">Baixar</a></DownloadButton>
              </SubWrapper>
           </Wrapper>
        </>
    )
}

export default Hero;