import React from 'react';

export function useAbortableEffect(
  fn: (abortController: AbortController) => void,
  deps: React.DependencyList
): void {
  const abortControllerRef = React.useRef<AbortController>();

  React.useEffect(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    fn(abortControllerRef.current);

    return () => abortControllerRef.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
