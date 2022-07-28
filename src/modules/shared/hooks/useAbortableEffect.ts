import React from 'react';

export function useAbortableEffect(
  fn: (abortController: AbortController) => ReturnType<React.EffectCallback>,
  deps: React.DependencyList
): void {
  const abortControllerRef = React.useRef<AbortController>();

  React.useEffect(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    const cleanFn = fn(abortControllerRef.current);

    return () => {
      abortControllerRef.current?.abort();
      cleanFn?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
