import { z } from 'zod';

export const ProductRedeemPostSchema = z.object({
  message: z.string(),
});

export interface ProductRedeemPostEndpoint
  extends z.infer<typeof ProductRedeemPostSchema> {}
