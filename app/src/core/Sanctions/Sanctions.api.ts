import { API_ROUTE } from '../../globals';
import { SanctionWithAlias } from './Sanctions.types';

export const SanctionsApi = {
  getExpandedSanctionById(id: string): Promise<SanctionWithAlias> {
    return fetch(`${API_ROUTE}sanctions/${id}?_embed=aliases`).then(resp => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp.json();
      } else if (resp.status === 404) {
        return null;
      } else {
        throw resp.statusText;
      }
    });
  },
};
