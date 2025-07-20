import { Prisma } from 'generated/prisma';

export type CollectionCreateParams = Omit<
  Prisma.collectionUncheckedCreateInput,
  'blockchain' | 'mint'
>;

export type CollectionUpdateParams = Omit<
  Prisma.collectionUncheckedUpdateInput,
  'blockchain' | 'mint'
>;
