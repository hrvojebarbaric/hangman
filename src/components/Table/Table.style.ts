import styled from 'styled-components'
import { colors } from '../../styles'

export const TableStyled = styled.div`
    padding: 1rem 0 0 0;
    width: 100%;

    table {
        width: 100%;
        border-spacing: 0;
        border: 1px solid ${colors.black};

        tr {
            &:last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid ${colors.black};
            border-right: 1px solid ${colors.black};

            &:last-child {
                border-right: 0;
            }
        }

        th {
            background-color: ${colors.black};
            color: ${colors.orange};
        }
    }
`
