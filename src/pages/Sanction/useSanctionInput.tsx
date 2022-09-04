import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'

const INPUT_DEBOUNCE_DELAY = 200
const ALIAS_KEY = 'alias'

export function useSanctionInput() {
  const [searchParams, setSearchParams] = useSearchParams()
  const alias = searchParams.get(ALIAS_KEY) || ''

  const [debounceInput] = useDebounce(INPUT_DEBOUNCE_DELAY)

  const onInputChange = (event) => {
    const value = event.target?.value?.toLowerCase()
    if (!value) {
      setSearchParams({ [ALIAS_KEY]: value })
    } else {
      debounceInput(() => {
        setSearchParams({ [ALIAS_KEY]: value })
      })
    }
  }

  return { alias, onInputChange }
}
