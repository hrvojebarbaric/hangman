import { useEffect, useState } from 'react'

const useStateChange = (state: unknown, event: unknown) => {
    const [isStateChanged, setStateChange] = useState<boolean>()

    useEffect(() => {
        setStateChange(true)
    }, [state])

    useEffect(() => {
        setStateChange(false)
    }, [event])

    return { isStateChanged, setStateChange }
}

export default useStateChange
