import { WebPlugin } from '@capacitor/core';
export class BatteryWeb extends WebPlugin {
    constructor() {
        super(...arguments);
        this.controller = new AbortController();
    }
    async start() {
        if (typeof navigator === 'undefined' || !('getBattery' in navigator)) {
            throw this.unavailable('Battery Status API is not available in this browser.');
        }
        else {
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
    notifyBatteryChange() {
        const result = {
            level: this.battery.level,
            hasBattery: true,
            isCharging: this.battery.charging,
            chargingTime: this.battery.chargingTime,
            dischargingTime: this.battery.dischargingTime,
        };
        this.notifyListeners('batteryChange', result);
        return result;
    }
    async stop() {
        this.controller.abort();
    }
    async removeAllListeners() {
        this.controller.abort();
        return super.removeAllListeners();
    }
}
//# sourceMappingURL=web.js.map