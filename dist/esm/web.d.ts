import { WebPlugin } from '@capacitor/core';
import type { BatteryInfos, BatteryPlugin } from './definitions';
export declare class BatteryWeb extends WebPlugin implements BatteryPlugin {
    private battery;
    private controller;
    start(): Promise<BatteryInfos | undefined>;
    private notifyBatteryChange;
    stop(): Promise<void>;
    removeAllListeners(): Promise<void>;
}
