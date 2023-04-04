import Styled from 'styled-components'

export const VisitButton = Styled.button`
background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
border: 0px solid;
border-radius: 7px;
padding: 10px;`
