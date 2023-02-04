import { DevicesWrapper, Wrapper, Title, AnchorsSection } from './styles.js';
import { CircleFill } from '@styled-icons/bootstrap/CircleFill';

function Devices () {
  return (
    <DevicesWrapper>
      <Wrapper>
        <img src='https://www-growth.scdn.co/static/download/all-devices.svg' />
        <Title>
          Uma só conta para curtir a música em qualquer dispositivo.
        </Title>
        <AnchorsSection>
          <p>Celular</p>
          <CircleFill size='.6rem' color='green' />
          <p>Computador</p>
          <CircleFill size='.6rem' color='green' />
          <p>Tablet</p>
          <CircleFill size='.6rem' color='green' />
          <a href='#'>Carro</a>
          <CircleFill size='.6rem' color='green' />
          <a href='#'>Playstation</a>
          <CircleFill size='.6rem' color='green' />
          <a href='#'>Xbox</a>
          <CircleFill size='.6rem' color='green' />
          <a href='#'>Tv</a>
          <CircleFill size='.6rem' color='green' />
          <a href='#'>Auto Falante</a>
          <CircleFill size='.6rem' color='green' />
          <a href='#'>Web Player</a>
        </AnchorsSection>
      </Wrapper>
    </DevicesWrapper>
  );
}

export default Devices;
