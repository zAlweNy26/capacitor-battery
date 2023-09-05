import type { PluginListenerHandle } from '@capacitor/core';
export declare enum BatteryChargeMode {
    UNKNOWN = 0,
    AC = 1,
    USB = 2,
    DOCK = 3,
    WIRELESS = 4
}
export declare enum BatteryHealth {
    UNKNOWN = 0,
    COLD = 1,
    DEAD = 2,
    GOOD = 3,
    OVERHEAT = 4,
    OVER_VOLTAGE = 5,
    FAILURE = 6
}
export declare enum BatteryStatus {
    UNKNOWN = 0,
    NOT_CHARGING = 1,
    DISCHARGING = 2,
    CHARGING = 3,
    FULL = 4
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
