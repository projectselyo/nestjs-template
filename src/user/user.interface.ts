import { Prisma } from 'generated/prisma';

export type UserCreateParams = Omit<
  Prisma.userUncheckedCreateInput,
  'user_membership' | 'wallet'
>;

export type UserUpdateParams = Omit<
  Prisma.userUncheckedUpdateInput,
  'user_membership' | 'wallet'
>;
