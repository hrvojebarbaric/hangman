import styled from 'styled-components'
import { colors, mixins } from '../../styles'

export const ScoreStyled = styled.div`
    ${mixins.contentPadding}
    text-align: left;

    .backButton {
        ${mixins.buttonMain}
        font-weight: bold;
        text-decoration: none;
        padding: 5px 10px;
        color: ${colors.black};
        border-radius: 5px;
    }
`
