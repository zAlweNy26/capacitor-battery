'use strict';

var core = require('@capacitor/core');

/** Represents the charging mode of a battery. */
exports.BatteryChargeMode = void 0;
(function (BatteryChargeMode) {
    /** The charging mode is unknown. */
    BatteryChargeMode[BatteryChargeMode["UNKNOWN"] = 0] = "UNKNOWN";
    /** The battery is being charged through an AC power source. */
    BatteryChargeMode[BatteryChargeMode["AC"] = 1] = "AC";
    /** The battery is being charged through a USB connection. */
    BatteryChargeMode[BatteryChargeMode["USB"] = 2] = "USB";
    /** The battery is being charged through a docking station. */
    BatteryChargeMode[BatteryChargeMode["DOCK"] = 3] = "DOCK";
    /** The battery is being charged wirelessly. */
    BatteryChargeMode[BatteryChargeMode["WIRELESS"] = 4] = "WIRELESS";
})(exports.BatteryChargeMode || (exports.BatteryChargeMode = {}));
/**
 * Represents the health status of a battery.
 */
exports.BatteryHealth = void 0;
(function (BatteryHealth) {
    /** The health status is unknown. */
    BatteryHealth[BatteryHealth["UNKNOWN"] = 0] = "UNKNOWN";
    /** The battery is cold. */
    BatteryHealth[BatteryHealth["COLD"] = 1] = "COLD";
    /** The battery is dead. */
    BatteryHealth[BatteryHealth["DEAD"] = 2] = "DEAD";
    /** The battery is in good health. */
    BatteryHealth[BatteryHealth["GOOD"] = 3] = "GOOD";
    /** The battery is overheating. */
    BatteryHealth[BatteryHealth["OVERHEAT"] = 4] = "OVERHEAT";
    /** The battery is experiencing over voltage. */
    BatteryHealth[BatteryHealth["OVER_VOLTAGE"] = 5] = "OVER_VOLTAGE";
    /** The battery has failed. */
    BatteryHealth[BatteryHealth["FAILURE"] = 6] = "FAILURE";
})(exports.BatteryHealth || (exports.BatteryHealth = {}));
/**
 * Represents the battery status.
 */
exports.BatteryStatus = void 0;
(function (BatteryStatus) {
    /** The battery status is unknown. */
    BatteryStatus[BatteryStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /** The battery is not charging. */
    BatteryStatus[BatteryStatus["NOT_CHARGING"] = 1] = "NOT_CHARGING";
    /** The battery is discharging. */
    BatteryStatus[BatteryStatus["DISCHARGING"] = 2] = "DISCHARGING";
    /** The battery is charging. */
    BatteryStatus[BatteryStatus["CHARGING"] = 3] = "CHARGING";
    /** The battery is full. */
    BatteryStatus[BatteryStatus["FULL"] = 4] = "FULL";
})(exports.BatteryStatus || (exports.BatteryStatus = {}));

const Battery = core.registerPlugin('Battery', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.BatteryWeb()),
});

class BatteryWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BatteryWeb: BatteryWeb
});

exports.Battery = Battery;
//# sourceMappingURL=plugin.cjs.js.map
