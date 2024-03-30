export type InitalStateScore = {
    userName?: string
    scoreStatus: string
    error: string | undefined
    createScoreStatus: string
    score: Score[]
}

export type CreateScore = {
    quoteId: string
    length: number
    uniqueCharacters: number
    userName: string
    errors: number
    duration: number
}

export type Score = {
    id: number
    quoteId: string
    length: number
    uniqueCharacters: number
    userName: string
    errors: number
    duration: number
}
