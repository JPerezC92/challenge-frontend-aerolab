import { Product } from 'src/modules/products/models/Product';
import { CleanEvent } from 'src/modules/shared/events/CleanEvent';

export const ProductRedeemType = 'product:redeem';

export function ProductRedeemEventTrigger(product: Product) {
  const event = new CustomEvent<Product>(ProductRedeemType, {
    detail: product,
  });

  window.dispatchEvent(event);
}

export function ProductRedeemEventListener(
  fn: (product: Product) => void
): CleanEvent {
  const listener = (e: Event): void => {
    const { detail: product } = e as CustomEvent<Product>;
    fn(product);
  };

  window.addEventListener(ProductRedeemType, listener);

  return () => {
    window.removeEventListener(ProductRedeemType, listener);
  };
}
