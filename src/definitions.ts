import type { PluginListenerHandle } from '@capacitor/core';

export enum BatteryChargeMode {
  UNKNOWN,
  AC,
  USB,
  DOCK,
  WIRELESS,
}

export enum BatteryHealth {
  UNKNOWN,
  COLD,
  DEAD,
  GOOD,
  OVERHEAT,
  OVER_VOLTAGE,
  FAILURE,
}

export enum BatteryStatus {
  UNKNOWN,
  NOT_CHARGING,
  DISCHARGING,
  CHARGING,
  FULL,
}

export interface Battery {
  level: number;
  hasBattery: boolean;
  isCharging: boolean;
  chargingTime?: number;
  dischargingTime?: number;
  currentCapacity?: number;
  totalCapacity?: number;
  realPercentage?: number;
  technology?: string;
  temperature?: number;
  voltage?: number;
  amperage?: number;
  wattage?: number;
  health?: BatteryHealth;
  status?: BatteryStatus;
  chargeMode?: BatteryChargeMode;
}

export interface BatteryPlugin {
  start(): Promise<Battery | undefined>;
  stop(): Promise<void>;
  addListener(eventName: 'batteryChange', listenerFunc: (event: Battery) => void): Promise<PluginListenerHandle>;
  removeAllListeners(): Promise<void>;
}
