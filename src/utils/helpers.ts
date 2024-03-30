import { Score } from '../features/score/Score.types'

export const createAlphabetArray = () => {
    return Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index))
}

export const showLetters = (inputLetters: string, content: string) => {
    const regexPattern = new RegExp(`[^${inputLetters} .,!";:#$%&/()=?*'-]`, 'gi')

    return content.replace(regexPattern, '_')
}

export const getUniqueCharacters = (str: string) => {
    const charArray = [...str]
    const uniqueCharsSet = new Set(charArray)
    const uniqueCharsArray = [...uniqueCharsSet]

    return uniqueCharsArray
}

export const sortScoreData = (data: Score[]) => {
    return data.slice().sort((a, b) => {
        if (a.errors !== b.errors) {
            return a.errors - b.errors
        }

        if (a.uniqueCharacters !== b.uniqueCharacters) {
            return b.uniqueCharacters - a.uniqueCharacters
        }

        if (a.length !== b.length) {
            return b.length - a.length
        }

        return a.duration - b.duration
    })
}
