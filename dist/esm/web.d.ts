import { WebPlugin } from '@capacitor/core';
import type { BatteryPlugin, Battery } from './definitions';
export declare class BatteryWeb extends WebPlugin implements BatteryPlugin {
    private battery;
    private controller;
    start(): Promise<Battery | undefined>;
    private notifyBatteryChange;
    stop(): Promise<void>;
    removeAllListeners(): Promise<void>;
}
