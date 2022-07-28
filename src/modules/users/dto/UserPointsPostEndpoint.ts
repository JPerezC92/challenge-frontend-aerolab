import { z } from 'zod';

export const UserPointsPostEndpointSchema = z.object({
  message: z.string(),
  ['New Points']: z.number(),
});

export interface UserPointsPostEndpoint
  extends z.infer<typeof UserPointsPostEndpointSchema> {}
