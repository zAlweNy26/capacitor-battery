import { WebPlugin } from '@capacitor/core';

import { Battery } from './definitions';
import type { BatteryPlugin } from './definitions';

export class BatteryWeb extends WebPlugin implements BatteryPlugin {
  private battery!: BatteryManager;
  private controller = new AbortController()

  async start(): Promise<Battery | undefined> {
    if (typeof navigator === 'undefined' || !("getBattery" in navigator)) {
      this.unavailable('Battery Status API is not available in this browser.');
    } else {
      this.battery = await navigator.getBattery()

      if (!this.battery) {
        this.unavailable('Unable to get the battery status in this browser.');
      }

      this.battery.addEventListener('chargingchange', 
      () => this.notifyBatteryChange(), { signal: this.controller.signal })

      this.battery.addEventListener('chargingtimechange', 
        () => this.notifyBatteryChange(), { signal: this.controller.signal })
        
        this.battery.addEventListener('dischargingtimechange', 
      () => this.notifyBatteryChange(), { signal: this.controller.signal })

      this.battery.addEventListener('levelchange', 
        () => this.notifyBatteryChange(), { signal: this.controller.signal })

      return this.notifyBatteryChange()
    }
  }

  private notifyBatteryChange() {
    const result = {
      hasBattery: true,
      isCharging: this.battery.charging,
      chargingTime: this.battery.chargingTime,
      dischargingTime: this.battery.dischargingTime,
      level: this.battery.level
    } satisfies Battery
    this.notifyListeners('batteryChange', result)
    return result
  }

  async stop(): Promise<void> {
    this.controller.abort();
  }

  async removeAllListeners(): Promise<void> {
    this.controller.abort();
    return super.removeAllListeners();
  }
}
