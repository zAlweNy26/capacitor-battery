/** Represents the charging mode of a battery. */
export var BatteryChargeMode;
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
})(BatteryChargeMode || (BatteryChargeMode = {}));
/**
 * Represents the health status of a battery.
 */
export var BatteryHealth;
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
})(BatteryHealth || (BatteryHealth = {}));
/**
 * Represents the battery status.
 */
export var BatteryStatus;
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
})(BatteryStatus || (BatteryStatus = {}));
//# sourceMappingURL=definitions.js.map