import styled from 'styled-components'
import { ContainerProps } from './types'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  padding: 5px 10px;
  border-radius: 5px;
  transition: box-shadow 0.2s;
  position: relative;

  .dropdown-container {
    display: none;
  }

  .dropdown-icon {
    margin-left: 11px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 4px ${(props) => props.theme.colors.lightBlack};

    .dropdown-container {
      display: flex;
    }
  }
`

export const Indicator = styled.span<ContainerProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;

  ${({ theme, isError }) =>
    isError
      ? `background: ${theme.colors.red}; border: ${theme.borders.lightError}`
      : `background: ${theme.colors.green}; border: ${theme.borders.success}`}
`
