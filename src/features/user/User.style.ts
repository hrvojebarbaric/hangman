import styled from 'styled-components'
import { colors, mixins } from '../../styles'

export const UserStyled = styled.div`
    padding: 30px 50px;
    border: 5px ${colors.orange} solid;
    border-radius: 5px;

    .title {
        font-family: 'Just Another Hand', cursive;
        margin: 0 0 20px 0;
    }

    .userName {
        height: 25px;
        padding: 3px 5px;
        display: block;
        border: 1px ${colors.orange} solid;
    }
`

export const LoginButtonStyled = styled.button`
    ${mixins.buttonMain}
    display: block;
    min-height: auto;
    margin-top: 30px;
`
