type Quotes = {
    author: string
    authorSlug: string
    content: string
    dateAdded: string
    dateModified: string
    length: number
    tags: string[]
    _id: string
}

export type InitalStateHangMan = {
    hiddenQuote?: string
    alphabetArray: string[]
    numberOfMissingLetters?: number
    numberOfErrors: number
    userInput: string
    quotes: Quotes
    quoteStatus: string
    error?: string
    duration: number
    createScoreStatus: string
}
