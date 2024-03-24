import { WebPlugin } from '@capacitor/core';
import { BatteryInfos } from './definitions';
import type { BatteryPlugin } from './definitions';
export declare class BatteryWeb extends WebPlugin implements BatteryPlugin {
    private battery;
    private controller;
    start(): Promise<BatteryInfos | undefined>;
    private notifyBatteryChange;
    stop(): Promise<void>;
    removeAllListeners(): Promise<void>;
}
