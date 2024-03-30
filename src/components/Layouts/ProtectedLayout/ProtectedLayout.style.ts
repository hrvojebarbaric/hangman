import styled from 'styled-components'
import { colors, mixins } from '../../../styles'

export const ProtectedLayoutStyled = styled.div``

export const HeaderStyled = styled.div`
    background-color: ${colors.black};
    color: ${colors.orange};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
        ${mixins.contentWide}
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            font-family: 'Just Another Hand', cursive;
            font-size: 3.2em;
        }

        .userContent {
            display: flex;
            align-items: center;
        }
    }
`

export const LayoutContainerStyled = styled.div`
    ${mixins.contentWide}
    text-align: center;
`

export const HeaderButtonStyled = styled.button`
    ${mixins.buttonMain}
    padding: 2px;
    min-width: 30px;
    min-height: 30px;
    margin-left: 5px;
`
