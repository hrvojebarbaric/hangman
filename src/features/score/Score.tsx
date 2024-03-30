import { useEffect, useMemo } from 'react'
import { getScore } from './scoreSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { STATUS_FAILED, STATUS_LOADING } from '../../utils/constants'
import Loader from '../../components/Loader/Loader'
import Table from '../../components/Table/Table'
import { Score as ScoreType } from '../../features/score/Score.types'
import { Column } from 'react-table'
import { ScoreStyled } from './Score.style'
import { sortScoreData } from '../../utils/helpers'

const Score = () => {
    const { score, scoreStatus } = useSelector((state: RootState) => state.score)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getScore())
    }, [dispatch])

    const columns = useMemo(
        () =>
            [
                {
                    Header: 'Id',
                    accessor: 'quoteId',
                },
                {
                    Header: 'Player',
                    accessor: 'userName',
                },
                {
                    Header: 'Duration',
                    accessor: 'duration',
                },
                {
                    Header: 'Errors',
                    accessor: 'errors',
                },
                {
                    Header: 'Unique characters',
                    accessor: 'uniqueCharacters',
                },
                {
                    Header: 'Length',
                    accessor: 'length',
                },
                {
                    Header: 'Total Points',
                    accessor: (item: ScoreType) => Math.ceil(100 / (item.errors + 1)),
                },
            ] as Column[],
        []
    )

    if (scoreStatus === STATUS_LOADING) return <Loader />
    if (scoreStatus === STATUS_FAILED) return <p>Something went wrong...</p>

    //----------task sort------------
    /* const scoreSorted = score
        .slice()
        .sort((a, b) => Math.ceil(100 / (b.errors + 1) - Math.ceil(100 / (a.errors + 1)))) */

    //----------bonus sort------------
    const bounsSort = sortScoreData(score)

    return (
        <ScoreStyled>
            <h1>Greate game!</h1>
            <Table columns={columns} data={bounsSort} />
        </ScoreStyled>
    )
}

export default Score
