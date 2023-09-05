declare type BatteryEvents = 'chargingchange' | 'chargingtimechange' | 'dischargingtimechange' | 'levelchange';

declare class BatteryManager extends EventTarget {
  readonly charging: boolean;
  readonly chargingTime: number;
  readonly dischargingTime: number;
  readonly level: number;

  chargingchange(): void;
  chargingtimechange(): void;
  dischargingtimechange(): void;
  levelchange(): void;

  addEventListener(
    type: BatteryEvents,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions | undefined,
  ): void;

  removeEventListener(
    type: BatteryEvents,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions | undefined,
  ): void;
}

interface Navigator {
  getBattery: () => Promise<BatteryManager>;
}
