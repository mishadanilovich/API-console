import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`

export const UserInfo = styled.p`
  display: flex;
  column-gap: 5px;
  padding: 5px 15px;
  border: ${(props) => props.theme.borders.main};
  border-radius: 5px;
`

export const Separator = styled.span`
  color: ${(props) => props.theme.colors.lightBlack};
`

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`
