import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.div`
  ${(props) => handleProps(props)};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow: hidden;
  padding: 10px;
`
