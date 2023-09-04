'use strict';

var core = require('@capacitor/core');

exports.BatteryChargeMode = void 0;
(function (BatteryChargeMode) {
    BatteryChargeMode[BatteryChargeMode["UNKNOWN"] = 0] = "UNKNOWN";
    BatteryChargeMode[BatteryChargeMode["AC"] = 1] = "AC";
    BatteryChargeMode[BatteryChargeMode["USB"] = 2] = "USB";
    BatteryChargeMode[BatteryChargeMode["DOCK"] = 3] = "DOCK";
    BatteryChargeMode[BatteryChargeMode["WIRELESS"] = 4] = "WIRELESS";
})(exports.BatteryChargeMode || (exports.BatteryChargeMode = {}));
exports.BatteryHealth = void 0;
(function (BatteryHealth) {
    BatteryHealth[BatteryHealth["UNKNOWN"] = 0] = "UNKNOWN";
    BatteryHealth[BatteryHealth["COLD"] = 1] = "COLD";
    BatteryHealth[BatteryHealth["DEAD"] = 2] = "DEAD";
    BatteryHealth[BatteryHealth["GOOD"] = 3] = "GOOD";
    BatteryHealth[BatteryHealth["OVERHEAT"] = 4] = "OVERHEAT";
    BatteryHealth[BatteryHealth["OVER_VOLTAGE"] = 5] = "OVER_VOLTAGE";
    BatteryHealth[BatteryHealth["FAILURE"] = 6] = "FAILURE";
})(exports.BatteryHealth || (exports.BatteryHealth = {}));
exports.BatteryStatus = void 0;
(function (BatteryStatus) {
    BatteryStatus[BatteryStatus["UNKNOWN"] = 0] = "UNKNOWN";
    BatteryStatus[BatteryStatus["NOT_CHARGING"] = 1] = "NOT_CHARGING";
    BatteryStatus[BatteryStatus["DISCHARGING"] = 2] = "DISCHARGING";
    BatteryStatus[BatteryStatus["CHARGING"] = 3] = "CHARGING";
    BatteryStatus[BatteryStatus["FULL"] = 4] = "FULL";
})(exports.BatteryStatus || (exports.BatteryStatus = {}));

const Battery = core.registerPlugin('Battery', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BatteryWeb()),
});

class BatteryWeb extends core.WebPlugin {
    constructor() {
        super(...arguments);
        this.controller = new AbortController();
    }
    async start() {
        if (typeof navigator === 'undefined' || !("getBattery" in navigator)) {
            this.unavailable('Battery Status API is not available in this browser.');
        }
        else {
            this.battery = await navigator.getBattery();
            if (!this.battery) {
                this.unavailable('Unable to get the battery status in this browser.');
            }
            this.battery.addEventListener('chargingchange', () => this.notifyBatteryChange(), { signal: this.controller.signal });
            this.battery.addEventListener('chargingtimechange', () => this.notifyBatteryChange(), { signal: this.controller.signal });
            this.battery.addEventListener('dischargingtimechange', () => this.notifyBatteryChange(), { signal: this.controller.signal });
            this.battery.addEventListener('levelchange', () => this.notifyBatteryChange(), { signal: this.controller.signal });
            return this.notifyBatteryChange();
        }
    }
    notifyBatteryChange() {
        const result = {
            hasBattery: true,
            isCharging: this.battery.charging,
            chargingTime: this.battery.chargingTime,
            dischargingTime: this.battery.dischargingTime,
            level: this.battery.level
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BatteryWeb: BatteryWeb
});

exports.Battery = Battery;
//# sourceMappingURL=plugin.cjs.js.map
