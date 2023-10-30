import type { PluginListenerHandle } from '@capacitor/core';

/**
 * Enum representing the different modes of charging for a battery.
 */
export enum BatteryChargeMode {
  UNKNOWN,
  AC,
  USB,
  DOCK,
  WIRELESS,
}

/**
 * Enum representing the health status of a device's battery.
 */
export enum BatteryHealth {
  UNKNOWN,
  COLD,
  DEAD,
  GOOD,
  OVERHEAT,
  OVER_VOLTAGE,
  FAILURE,
}

/**
 * Enum representing the possible battery statuses.
 */
export enum BatteryStatus {
  UNKNOWN,
  NOT_CHARGING,
  DISCHARGING,
  CHARGING,
  FULL,
}

/**
 * Represents the battery information of the device.
 */
export interface Battery {
  /** The current battery level as a percentage (0-100). */
  level: number;
  /** Whether the device has a battery or not. */
  hasBattery: boolean;
  /** Whether the device is currently charging or not. */
  isCharging: boolean;
  /** The estimated time remaining until the battery is fully charged (in minutes). Only available when charging. */
  chargingTime?: number;
  /** The estimated time remaining until the battery is fully discharged (in minutes). Only available when discharging. */
  dischargingTime?: number;
  /** The current battery capacity (in mAh). Only available on some devices. */
  currentCapacity?: number;
  /** The total battery capacity (in mAh). Only available on some devices. */
  totalCapacity?: number;
  /** The real battery percentage, which may differ from the reported percentage. Only available on some devices. */
  realPercentage?: number;
  /** The technology used in the battery. Only available on some devices. */
  technology?: string;
  /** The current temperature of the battery (in Celsius). Only available on some devices. */
  temperature?: number;
  /** The current voltage of the battery (in volts). Only available on some devices. */
  voltage?: number;
  /** The current amperage of the battery (in amperes). Only available on some devices. */
  amperage?: number;
  /** The current wattage of the battery (in watts). Only available on some devices. */
  wattage?: number;
  /** The health status of the battery. Only available on some devices. */
  health?: BatteryHealth;
  /** The status of the battery. Only available on some devices. */
  status?: BatteryStatus;
  /** The charging mode of the battery. Only available on some devices. */
  chargeMode?: BatteryChargeMode;
}

/**
 * The Battery plugin interface.
 */
export interface BatteryPlugin {
  /**
   * Starts monitoring the battery level.
   * @returns A promise that resolves with the current battery level, or undefined if the level cannot be determined.
   */
  start(): Promise<Battery | undefined>;

  /**
   * Stops monitoring the battery level.
   * @returns A promise that resolves when monitoring has stopped.
   */
  stop(): Promise<void>;

  /**
   * Adds a listener for battery change events.
   * @param eventName The name of the event to listen for.
   * @param listenerFunc The function to call when the event is triggered.
   * @returns A promise that resolves with a handle to the listener.
   */
  addListener(eventName: 'batteryChange', listenerFunc: (event: Battery) => void): Promise<PluginListenerHandle>;

  /**
   * Removes all listeners for battery change events.
   * @returns A promise that resolves when all listeners have been removed.
   */
  removeAllListeners(): Promise<void>;
}
