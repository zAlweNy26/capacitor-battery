/**
 * Enum representing the different modes of charging for a battery.
 */
export var BatteryChargeMode;
(function (BatteryChargeMode) {
    BatteryChargeMode[BatteryChargeMode["UNKNOWN"] = 0] = "UNKNOWN";
    BatteryChargeMode[BatteryChargeMode["AC"] = 1] = "AC";
    BatteryChargeMode[BatteryChargeMode["USB"] = 2] = "USB";
    BatteryChargeMode[BatteryChargeMode["DOCK"] = 3] = "DOCK";
    BatteryChargeMode[BatteryChargeMode["WIRELESS"] = 4] = "WIRELESS";
})(BatteryChargeMode || (BatteryChargeMode = {}));
/**
 * Enum representing the health status of a device's battery.
 */
export var BatteryHealth;
(function (BatteryHealth) {
    BatteryHealth[BatteryHealth["UNKNOWN"] = 0] = "UNKNOWN";
    BatteryHealth[BatteryHealth["COLD"] = 1] = "COLD";
    BatteryHealth[BatteryHealth["DEAD"] = 2] = "DEAD";
    BatteryHealth[BatteryHealth["GOOD"] = 3] = "GOOD";
    BatteryHealth[BatteryHealth["OVERHEAT"] = 4] = "OVERHEAT";
    BatteryHealth[BatteryHealth["OVER_VOLTAGE"] = 5] = "OVER_VOLTAGE";
    BatteryHealth[BatteryHealth["FAILURE"] = 6] = "FAILURE";
})(BatteryHealth || (BatteryHealth = {}));
/**
 * Enum representing the possible battery statuses.
 */
export var BatteryStatus;
(function (BatteryStatus) {
    BatteryStatus[BatteryStatus["UNKNOWN"] = 0] = "UNKNOWN";
    BatteryStatus[BatteryStatus["NOT_CHARGING"] = 1] = "NOT_CHARGING";
    BatteryStatus[BatteryStatus["DISCHARGING"] = 2] = "DISCHARGING";
    BatteryStatus[BatteryStatus["CHARGING"] = 3] = "CHARGING";
    BatteryStatus[BatteryStatus["FULL"] = 4] = "FULL";
})(BatteryStatus || (BatteryStatus = {}));
//# sourceMappingURL=definitions.js.map