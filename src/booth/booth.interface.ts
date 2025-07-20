import { Prisma } from 'generated/prisma';

export type BoothCreateParams = Omit<Prisma.boothUncheckedCreateInput, 'badge'>;

export type BoothUpdateParams = Omit<Prisma.boothUncheckedUpdateInput, 'badge'>;
