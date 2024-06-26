import { WebPlugin } from '@capacitor/core';

import { BatteryInfos } from './definitions';
import type { BatteryPlugin } from './definitions';

export class BatteryWeb extends WebPlugin implements BatteryPlugin {
  private battery!: BatteryManager;
  private controller = new AbortController();

  async start(): Promise<BatteryInfos | undefined> {
    if (typeof navigator === 'undefined' || !('getBattery' in navigator)) {
      throw this.unavailable('Battery Status API is not available in this browser.');
    } else {
      this.battery = await navigator.getBattery();

      if (!this.battery) {
        throw this.unavailable('Unable to get the battery status in this browser.');
      }

      this.battery.addEventListener('chargingchange', () => this.notifyBatteryChange(), {
        signal: this.controller.signal,
      });

      this.battery.addEventListener('chargingtimechange', () => this.notifyBatteryChange(), {
        signal: this.controller.signal,
      });

      this.battery.addEventListener('dischargingtimechange', () => this.notifyBatteryChange(), {
        signal: this.controller.signal,
      });

      this.battery.addEventListener('levelchange', () => this.notifyBatteryChange(), {
        signal: this.controller.signal,
      });

      return this.notifyBatteryChange();
    }
  }

  private notifyBatteryChange() {
    const result = {
      level: this.battery.level,
      hasBattery: true,
      isCharging: this.battery.charging,
      chargingTime: this.battery.chargingTime,
      dischargingTime: this.battery.dischargingTime,
    } satisfies BatteryInfos;
    this.notifyListeners('batteryChange', result);
    return result;
  }

  async stop(): Promise<void> {
    this.controller.abort();
  }

  async removeAllListeners(): Promise<void> {
    this.controller.abort();
    return super.removeAllListeners();
  }
}
