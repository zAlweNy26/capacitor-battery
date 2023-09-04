package com.alwe.plugins.battery

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import android.util.Log
import com.getcapacitor.JSObject

class Battery(
    private val notify: (eventName: String, data: JSObject, retainUntilConsumed: Boolean) -> Unit,
    private val context: Context
) : BroadcastReceiver() {
    private val intentFilter = IntentFilter()
    private var totalCapacity: Double = 0.0

    init {
        intentFilter.addAction(Intent.ACTION_BATTERY_CHANGED)
    }

    fun start(): JSObject {
        context.registerReceiver(this, intentFilter)
        totalCapacity = getBatteryCapacity(context)
        Log.d("Start", "Connection Plugin")
        return getValues(context, Intent.parseUri(Intent.ACTION_BATTERY_CHANGED, 0))
    }

    fun stop() {
        context.unregisterReceiver(this)
        Log.d("Stop", "Connection Plugin")
    }

    override fun onReceive(context: Context?, intent: Intent?) {
        if (intent != null && context != null) {
            getValues(context, intent)
        }
    }

    private fun getValues(context: Context, intent: Intent): JSObject {
        val content = JSObject()

        val batteryManager = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager

        val hasBattery = intent.getBooleanExtra(BatteryManager.EXTRA_PRESENT, false)
        val level = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
        val currentCapacity = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CHARGE_COUNTER) / 1000
        val technology = intent.getStringExtra(BatteryManager.EXTRA_TECHNOLOGY)
        val chargeMode = intent.getIntExtra(BatteryManager.EXTRA_PLUGGED, 0)
        val temperature = intent.getIntExtra(BatteryManager.EXTRA_TEMPERATURE, 0).toFloat() / 10 // °C
        val voltage = intent.getIntExtra(BatteryManager.EXTRA_VOLTAGE, 0) // mV
        val amperage = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CURRENT_NOW).toFloat() / 1000 // mA
        val wattage = (voltage * amperage) / (1000 * 1000) // W
        val health = intent.getIntExtra(BatteryManager.EXTRA_HEALTH, 0)
        val status = intent.getIntExtra(BatteryManager.EXTRA_STATUS, -1)
        val realPercentage = ((currentCapacity * 100) / totalCapacity)

        val isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING

        content.put("hasBattery", hasBattery)
        content.put("level", level)
        content.put("currentCapacity", currentCapacity)
        content.put("totalCapacity", totalCapacity)
        content.put("realPercentage", realPercentage)
        content.put("isCharging", isCharging)
        content.put("technology", technology)
        content.put("temperature", temperature)
        content.put("voltage", voltage)
        content.put("amperage", amperage)
        content.put("wattage", wattage)
        content.put("health", BatteryHealth.fromInt(health))
        content.put("status", BatteryStatus.fromInt(status))
        content.put("chargeMode", BatteryChargeMode.fromInt(chargeMode))

        this.notify("batteryChange", content, true)

        return content
    }

    private fun getBatteryCapacity(context: Context?): Double {
        val mPowerProfile: Any
        val batteryCapacity: Double
        val powerProfileClass = "com.android.internal.os.PowerProfile"
        try {
            mPowerProfile = Class.forName(powerProfileClass)
                .getConstructor(Context::class.java)
                .newInstance(context)
            batteryCapacity = Class
                .forName(powerProfileClass)
                .getMethod("getBatteryCapacity")
                .invoke(mPowerProfile) as Double
        } catch (e: Exception) {
            return 0.0
        }
        return batteryCapacity
    }
}