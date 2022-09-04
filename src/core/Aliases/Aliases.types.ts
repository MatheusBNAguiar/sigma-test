import type { Sanction } from "../Sanctions/Sanctions.types"

export type Alias = {
  id: number,
  sanctionId: number,
  alias: string
}

export type ExpandedAlias = Alias & {
  sanction: Sanction
}

export type ExpandedAliasList = ExpandedAlias[]

export type PaginatedExpandedAliasList = {
  pages: number;
  list: ExpandedAliasList
}
