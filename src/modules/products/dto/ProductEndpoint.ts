import { z } from 'zod';

export const ProductEndpointSchema = z.object({
  _id: z.string(),
  name: z.string(),
  cost: z.number(),
  category: z.string(),
  img: z.object({ url: z.string(), hdUrl: z.string() }),
});

export interface ProductEndpoint
  extends z.infer<typeof ProductEndpointSchema> {}
