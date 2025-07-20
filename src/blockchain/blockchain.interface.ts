import { Prisma } from 'generated/prisma';

export type BlockchainCreateParams = Omit<
  Prisma.blockchainUncheckedCreateInput,
  'collection' | 'wallet'
>;

export type BlockchainUpdateParams = Omit<
  Prisma.blockchainUncheckedUpdateInput,
  'collection' | 'wallet'
>;
