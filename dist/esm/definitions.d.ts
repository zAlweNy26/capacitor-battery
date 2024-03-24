import type { PluginListenerHandle } from '@capacitor/core';
/** Represents the charging mode of a battery. */
export declare enum BatteryChargeMode {
    /** The charging mode is unknown. */
    UNKNOWN = 0,
    /** The battery is being charged through an AC power source. */
    AC = 1,
    /** The battery is being charged through a USB connection. */
    USB = 2,
    /** The battery is being charged through a docking station. */
    DOCK = 3,
    /** The battery is being charged wirelessly. */
    WIRELESS = 4
}
/**
 * Represents the health status of a battery.
 */
export declare enum BatteryHealth {
    /** The health status is unknown. */
    UNKNOWN = 0,
    /** The battery is cold. */
    COLD = 1,
    /** The battery is dead. */
    DEAD = 2,
    /** The battery is in good health. */
    GOOD = 3,
    /** The battery is overheating. */
    OVERHEAT = 4,
    /** The battery is experiencing over voltage. */
    OVER_VOLTAGE = 5,
    /** The battery has failed. */
    FAILURE = 6
}
/**
 * Represents the battery status.
 */
export declare enum BatteryStatus {
    /** The battery status is unknown. */
    UNKNOWN = 0,
    /** The battery is not charging. */
    NOT_CHARGING = 1,
    /** The battery is discharging. */
    DISCHARGING = 2,
    /** The battery is charging. */
    CHARGING = 3,
    /** The battery is full. */
    FULL = 4
}
/** Represents the battery information of the device. */
export interface BatteryInfos {
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
/** Represents the BatteryPlugin interface. */
export interface BatteryPlugin {
    /**
     * Starts the battery plugin and returns the battery information.
     * @returns A promise that resolves to the battery information or undefined.
     */
    start(): Promise<BatteryInfos | undefined>;
    /**
     * Stops the battery plugin.
     * @returns A promise that resolves when the plugin is stopped.
     */
    stop(): Promise<void>;
    /**
     * Adds a listener for the 'batteryChange' event.
     * @param eventName The name of the event.
     * @param listenerFunc The listener function to be called when the event is triggered.
     * @returns A promise that resolves to a PluginListenerHandle.
     */
    addListener(eventName: 'batteryChange', listenerFunc: (event: BatteryInfos) => void): Promise<PluginListenerHandle>;
    /**
     * Removes all listeners for the 'batteryChange' event.
     * @returns A promise that resolves when all listeners are removed.
     */
    removeAllListeners(): Promise<void>;
}
