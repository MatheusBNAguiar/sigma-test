import { useSearchParams } from 'react-router-dom';
import { useDebounceValue } from '../../../hooks/useDebounceValue';

const INPUT_DEBOUNCE_DELAY = 200;
const ALIAS_KEY = 'alias';

export function useSanctionInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(ALIAS_KEY) || '';

  const onInputChange = event => {
    setSearchParams({ [ALIAS_KEY]: event.target?.value?.toLowerCase() });
  };

  const alias = useDebounceValue(value, INPUT_DEBOUNCE_DELAY);

  return { value, alias, onInputChange };
}
