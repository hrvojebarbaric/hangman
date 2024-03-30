import { Column } from 'react-table'

export type TableProps = {
    columns: Column<object>[]
    data: object[]
}
