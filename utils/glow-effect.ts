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
    const { width } = $effect.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - width / 2;

    $effect.style.setProperty("--data-x", `${x.toFixed()}px`);
    $effect.style.setProperty("--data-y", `${y.toFixed()}px`);
  }
}
