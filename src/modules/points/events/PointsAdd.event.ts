import { PointsAmount } from 'src/modules/points/models/PointsAmount';
import { CleanEvent } from 'src/modules/shared/events/CleanEvent';

const PointsAddType = 'points:add';

export function PointsAddEventTrigger(amount: PointsAmount) {
  const event = new CustomEvent<PointsAmount>(PointsAddType, {
    detail: amount,
  });

  window.dispatchEvent(event);
}

export function PointsAddEventListener(
  fn: (amount: PointsAmount) => void
): CleanEvent {
  const listener = (e: Event): void => {
    const { detail: pointsAmount } = e as CustomEvent<PointsAmount>;
    fn(pointsAmount);
  };

  window.addEventListener(PointsAddType, listener);

  return () => {
    window.removeEventListener(PointsAddType, listener);
  };
}
