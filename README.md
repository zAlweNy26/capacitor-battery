# Capacitor Plugin - Battery

Get access to every info about the device battery!

Supported Android version: `21+`\
Supported iOS version: `Not supported`\
Supported Browsers: `Chromium-based`

## Install

```bash
npm install @danyalwe/capacitor-battery
npx cap sync
```

## Todos

- [ ] Add support for iOS

## Supported methods

| Name               | Android | iOS | Web |
| :----------------- | :------ | :-- | :-- |
| start              | ✅      | ❌  | ✅  |
| stop               | ✅      | ❌  | ✅  |
| addListener        | ✅      | ❌  | ✅  |
| removeAllListeners | ✅      | ❌  | ✅  |

## Supported properties

| Property              | Android | iOS | Web |
| :-------------------- | :------ | :-- | :-- |
| **`currentCapacity`** | ✅      | ❌  | ❌  |
| **`totalCapacity`**   | ✅      | ❌  | ❌  |
| **`realPercentage`**  | ✅      | ❌  | ❌  |
| **`technology`**      | ✅      | ❌  | ❌  |
| **`temperature`**     | ✅      | ❌  | ❌  |
| **`voltage`**         | ✅      | ❌  | ❌  |
| **`amperage`**        | ✅      | ❌  | ❌  |
| **`wattage`**         | ✅      | ❌  | ❌  |
| **`health`**          | ✅      | ❌  | ❌  |
| **`status`**          | ✅      | ❌  | ❌  |
| **`chargeMode`**      | ✅      | ❌  | ❌  |
| **`level`**           | ✅      | ❌  | ✅  |
| **`hasBattery`**      | ✅      | ❌  | ✅  |
| **`isCharging`**      | ✅      | ❌  | ✅  |
| **`chargingTime`**    | ❌      | ❌  | ✅  |
| **`dischargingTime`** | ❌      | ❌  | ✅  |

## API

<docgen-index>

* [`start()`](#start)
* [`stop()`](#stop)
* [`addListener('batteryChange', ...)`](#addlistenerbatterychange)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Represents the BatteryPlugin interface.

### start()

```typescript
start() => Promise<BatteryInfos | undefined>
```

Starts the battery plugin and returns the battery information.

**Returns:** <code>Promise&lt;<a href="#batteryinfos">BatteryInfos</a>&gt;</code>

--------------------


### stop()

```typescript
stop() => Promise<void>
```

Stops the battery plugin.

--------------------


### addListener('batteryChange', ...)

```typescript
addListener(eventName: 'batteryChange', listenerFunc: (event: BatteryInfos) => void) => Promise<PluginListenerHandle>
```

Adds a listener for the 'batteryChange' event.

| Param              | Type                                                                      | Description                                                     |
| ------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **`eventName`**    | <code>'batteryChange'</code>                                              | The name of the event.                                          |
| **`listenerFunc`** | <code>(event: <a href="#batteryinfos">BatteryInfos</a>) =&gt; void</code> | The listener function to be called when the event is triggered. |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Removes all listeners for the 'batteryChange' event.

--------------------


### Interfaces


#### BatteryInfos

Represents the battery information of the device.

| Prop                  | Type                                                            | Description                                                                                                       |
| --------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`level`**           | <code>number</code>                                             | The current battery level as a percentage (0-100).                                                                |
| **`hasBattery`**      | <code>boolean</code>                                            | Whether the device has a battery or not.                                                                          |
| **`isCharging`**      | <code>boolean</code>                                            | Whether the device is currently charging or not.                                                                  |
| **`chargingTime`**    | <code>number</code>                                             | The estimated time remaining until the battery is fully charged (in minutes). Only available when charging.       |
| **`dischargingTime`** | <code>number</code>                                             | The estimated time remaining until the battery is fully discharged (in minutes). Only available when discharging. |
| **`currentCapacity`** | <code>number</code>                                             | The current battery capacity (in mAh). Only available on some devices.                                            |
| **`totalCapacity`**   | <code>number</code>                                             | The total battery capacity (in mAh). Only available on some devices.                                              |
| **`realPercentage`**  | <code>number</code>                                             | The real battery percentage, which may differ from the reported percentage. Only available on some devices.       |
| **`technology`**      | <code>string</code>                                             | The technology used in the battery. Only available on some devices.                                               |
| **`temperature`**     | <code>number</code>                                             | The current temperature of the battery (in Celsius). Only available on some devices.                              |
| **`voltage`**         | <code>number</code>                                             | The current voltage of the battery (in volts). Only available on some devices.                                    |
| **`amperage`**        | <code>number</code>                                             | The current amperage of the battery (in amperes). Only available on some devices.                                 |
| **`wattage`**         | <code>number</code>                                             | The current wattage of the battery (in watts). Only available on some devices.                                    |
| **`health`**          | <code><a href="#batteryhealth">BatteryHealth</a></code>         | The health status of the battery. Only available on some devices.                                                 |
| **`status`**          | <code><a href="#batterystatus">BatteryStatus</a></code>         | The status of the battery. Only available on some devices.                                                        |
| **`chargeMode`**      | <code><a href="#batterychargemode">BatteryChargeMode</a></code> | The charging mode of the battery. Only available on some devices.                                                 |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### BatteryHealth

| Members            | Description                               |
| ------------------ | ----------------------------------------- |
| **`UNKNOWN`**      | The health status is unknown.             |
| **`COLD`**         | The battery is cold.                      |
| **`DEAD`**         | The battery is dead.                      |
| **`GOOD`**         | The battery is in good health.            |
| **`OVERHEAT`**     | The battery is overheating.               |
| **`OVER_VOLTAGE`** | The battery is experiencing over voltage. |
| **`FAILURE`**      | The battery has failed.                   |


#### BatteryStatus

| Members            | Description                    |
| ------------------ | ------------------------------ |
| **`UNKNOWN`**      | The battery status is unknown. |
| **`NOT_CHARGING`** | The battery is not charging.   |
| **`DISCHARGING`**  | The battery is discharging.    |
| **`CHARGING`**     | The battery is charging.       |
| **`FULL`**         | The battery is full.           |


#### BatteryChargeMode

| Members        | Description                                              |
| -------------- | -------------------------------------------------------- |
| **`UNKNOWN`**  | The charging mode is unknown.                            |
| **`AC`**       | The battery is being charged through an AC power source. |
| **`USB`**      | The battery is being charged through a USB connection.   |
| **`DOCK`**     | The battery is being charged through a docking station.  |
| **`WIRELESS`** | The battery is being charged wirelessly.                 |

</docgen-api>
