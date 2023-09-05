package com.alwe.plugins.battery

import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "Battery")
class BatteryPlugin : Plugin() {
    private var implementation: Battery? = null

    override fun load() {
        super.load()
        implementation = Battery(::notifyListeners, context)
    }

    @PluginMethod
    fun start(call: PluginCall) {
        val res = implementation?.start()
        call.resolve(res)
    }

    @PluginMethod
    fun stop(call: PluginCall) {
        implementation?.stop()
    }
}