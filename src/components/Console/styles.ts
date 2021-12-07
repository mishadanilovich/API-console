import styled from 'styled-components'

export const ConsoleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3px;
  width: 100%;
  padding: 10px 15px 15px;
  background: ${(props) => props.theme.colors.white};
  border-top: ${(props) => props.theme.borders.main};
  border-bottom: ${(props) => props.theme.borders.main};
`

export const ConsoleTextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 100%;
`

export const ConsoleTextareaTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.gray};
`

export const ConsoleTextarea = styled.textarea`
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  border: ${(props) => props.theme.borders.main};
  color: ${(props) => props.theme.colors.black};

  resize: none;
  outline: none;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
`
