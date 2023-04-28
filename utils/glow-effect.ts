import { MutableRefObject, SyntheticEvent } from "react";

interface IUpdateEffectPositionOnMouseMove {
  event: SyntheticEvent<HTMLElement, MouseEvent>;
  containerRef: MutableRefObject<HTMLElement | null>;
  effectRef: MutableRefObject<HTMLElement | null>;
}

export function updateEffectPositionOnMouseMove({
  event,
  containerRef,
  effectRef,
}: IUpdateEffectPositionOnMouseMove) {
  if (effectRef.current && containerRef.current) {
    const $effect = effectRef.current as HTMLElement;
    const $container = containerRef.current as HTMLElement;

    const { clientX, clientY } = event.nativeEvent;

    const { top, left } = $container.getBoundingClientRect();
    const { width, height } = $effect.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;

    $effect.style.left = `${x}px`;
    $effect.style.top = `${y}px`;
  }
}
