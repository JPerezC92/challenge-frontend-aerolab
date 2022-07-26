import { z } from 'zod';

export const UserGetEndpointSchema = z.object({
  _id: z.string(),
  name: z.string(),
  points: z.number(),
  redeemHistory: z.array(z.unknown()),
  createDate: z.string().refine((v) => !!new Date(v)),
});

export interface UserGetEndpoint
  extends z.infer<typeof UserGetEndpointSchema> {}
