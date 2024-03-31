import { useEffect, useMemo } from 'react'
import { getScore } from './scoreSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { STATUS_FAILED, STATUS_LOADING } from '../../utils/state.constants'
import Loader from '../../components/Loader/Loader'
import Table from '../../components/Table/Table'
import { Score as ScoreType } from '../../features/score/Score.types'
import { Column } from 'react-table'
import { ScoreStyled } from './Score.style'
import { sortScoreData } from '../../utils/helpers'
import { text } from '../../utils/text.constatns'

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
                    Header: `${text.score.table.id}`,
                    accessor: 'quoteId',
                },
                {
                    Header: `${text.score.table.player}`,
                    accessor: 'userName',
                },
                {
                    Header: `${text.score.table.duration}`,
                    accessor: 'duration',
                },
                {
                    Header: `${text.score.table.duration}`,
                    accessor: 'errors',
                },
                {
                    Header: `${text.score.table.uniqueCharacters}`,
                    accessor: 'uniqueCharacters',
                },
                {
                    Header: `${text.score.table.length}`,
                    accessor: 'length',
                },
                {
                    Header: `${text.score.table.totalPoints}`,
                    accessor: (item: ScoreType) => Math.ceil(100 / (item.errors + 1)),
                },
            ] as Column[],
        []
    )

    if (scoreStatus === STATUS_LOADING) return <Loader />
    if (scoreStatus === STATUS_FAILED) return <p>{text.error}</p>

    //----------task sort------------
    /* const scoreSorted = score
        .slice()
        .sort((a, b) => Math.ceil(100 / (b.errors + 1) - Math.ceil(100 / (a.errors + 1)))) */

    //----------bonus sort------------
    const bounsSort = sortScoreData(score)

    return (
        <ScoreStyled>
            <h1>{text.score.title}</h1>
            <Table columns={columns} data={bounsSort} />
        </ScoreStyled>
    )
}

export default Score
