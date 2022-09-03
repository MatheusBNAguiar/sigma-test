import { SanctionList, SanctionWithAlias } from "./Sanctions.types"

export const SanctionsApi = {
  getSanctionsList(): Promise<SanctionList> {
    return fetch('http://localhost:3000/sanctions').then((response) => response.json())
  },
  getExpandedSanctionById(id: string): Promise<SanctionWithAlias> {
    return fetch(`http://localhost:3000/sanctions/${id}?_embed=aliases`).then((response) => response.json())
  }
}
