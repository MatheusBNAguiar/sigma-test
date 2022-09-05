import { Alias } from '../Aliases/Aliases.types';

export type Sanction = {
  id: number;
  primaryName: string;
  issued: string;
  ended?: string;
};

export type SanctionList = Sanction[];

export type SanctionWithAlias = Sanction & {
  aliases: Alias[];
};

export type PaginatedSanctions = {
  list: SanctionList;
  currentPage: number;
  pages: number;
};
