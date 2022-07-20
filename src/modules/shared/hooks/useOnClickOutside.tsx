import React from 'react';

export function useOnClickOutside<T extends HTMLElement>(
  fn: () => void,
  deps: React.DependencyList
) {
  const domNode = React.useRef<T>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent): void => {
      if (!domNode.current?.contains(e.target as Node)) {
        fn();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return domNode;
}
