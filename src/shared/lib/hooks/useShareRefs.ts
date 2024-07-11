import type { MutableRefObject, RefCallback } from "react";

type ShareRefs<T extends HTMLElement> = (el: T) => void;

type MutableRefTypes<T extends HTMLElement> =
  | RefCallback<T | null>
  | MutableRefObject<T | null>
  | null;

export const useShareRefs = function <T extends HTMLElement>(
  refs: Array<MutableRefTypes<T>>,
): ShareRefs<T> {
  const isMutableObject = (
    ref: MutableRefTypes<T>,
  ): ref is MutableRefObject<T> => {
    return (ref as MutableRefObject<T>).current !== undefined;
  };

  return (el: T) => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (isMutableObject(ref)) {
        return (ref.current = el);
      }

      return (ref as RefCallback<T>)(el);
    });
  };
};
