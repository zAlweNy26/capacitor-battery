package com.alwe.plugins.battery

import android.os.BatteryManager

enum class BatteryChargeMode(val type: Int) {
    UNKNOWN(0),
    AC(BatteryManager.BATTERY_PLUGGED_AC),
    USB(BatteryManager.BATTERY_PLUGGED_USB),
    DOCK(BatteryManager.BATTERY_PLUGGED_DOCK),
    WIRELESS(BatteryManager.BATTERY_PLUGGED_WIRELESS);

    companion object {
        private val map = BatteryChargeMode.values().associateBy(BatteryChargeMode::type)
        fun fromInt(type: Int) = map[type]
    }
}

enum class BatteryStatus(val type: Int) {
    UNKNOWN(BatteryManager.BATTERY_STATUS_UNKNOWN),
    NOT_CHARGING(BatteryManager.BATTERY_STATUS_NOT_CHARGING),
    DISCHARGING(BatteryManager.BATTERY_STATUS_DISCHARGING),
    CHARGING(BatteryManager.BATTERY_STATUS_CHARGING),
    FULL(BatteryManager.BATTERY_STATUS_FULL);

    companion object {
        private val map = BatteryStatus.values().associateBy(BatteryStatus::type)
        fun fromInt(type: Int) = map[type]
    }
}

enum class BatteryHealth(val type: Int) {
    UNKNOWN(BatteryManager.BATTERY_HEALTH_UNKNOWN),
    COLD(BatteryManager.BATTERY_HEALTH_COLD),
    DEAD(BatteryManager.BATTERY_HEALTH_DEAD),
    GOOD(BatteryManager.BATTERY_HEALTH_GOOD),
    OVERHEAT(BatteryManager.BATTERY_HEALTH_OVERHEAT),
    OVER_VOLTAGE(BatteryManager.BATTERY_HEALTH_OVER_VOLTAGE),
    FAILURE(BatteryManager.BATTERY_HEALTH_UNSPECIFIED_FAILURE);

    companion object {
        private val map = BatteryHealth.values().associateBy(BatteryHealth::type)
        fun fromInt(type: Int) = map[type]
    }
}

inline fun <reified T : Enum<T>> Int.toEnum(): T? {
    return enumValues<T>().firstOrNull { it.ordinal == this }
}