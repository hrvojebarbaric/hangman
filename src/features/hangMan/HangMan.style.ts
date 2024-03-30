import styled from 'styled-components'
import { mixins } from '../../styles'

export const HangManStyled = styled.div`
    ${mixins.contentPadding}

    .qoute {
        letter-spacing: 2px;
        padding: 20px 0;
    }

    .gallKeyWrapper {
        display: flex;
        justify-content: center;
    }
`
