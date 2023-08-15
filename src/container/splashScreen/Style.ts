import styled from 'styled-components/native';
import {SCREEN_HEIGHT} from '../../common/hooks';

type SplashContainerProps = {
  color?: string;
};
export const SplashContainer = styled.View<SplashContainerProps>`
  height: ${SCREEN_HEIGHT};
  flex-direction: row;
  background-color: ${props => props.color || ''};
  align-items: center;
  justify-content: center;
`;
