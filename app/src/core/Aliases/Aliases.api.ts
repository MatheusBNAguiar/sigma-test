import { API_ROUTE } from '../../globals';
import { PaginatedExpandedAliasList } from './Aliases.types';

export const AliasesApi = {
  getPaginatedAliases(page = 1, query?: string | null): Promise<PaginatedExpandedAliasList> {
    const queryParams = new URLSearchParams({
      _page: String(page),
      _expand: 'sanction',
      ...(query ? { q: query } : {}),
    }).toString();
    return fetch(`${API_ROUTE}aliases?${queryParams}`).then(async resp => {
      if (resp.status >= 200 && resp.status < 300) {
        const itemCount = (resp.headers.get('X-Total-Count') as unknown as number) || 0;
        const list = await resp.json();
        const pages = Math.ceil(itemCount / 10);
        return {
          pages,
          list,
        };
      } else {
        throw resp.statusText;
      }
    });
  },
};
