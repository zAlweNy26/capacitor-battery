# Capacitor Plugin - Battery

Get access to every info about the device battery!

## Install

```bash
npm install @danyalwe/capacitor-battery
npx cap sync
```

### Todos

- [ ] Improve documentation, add JSDoc strings
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

### start()

```typescript
start() => Promise<Battery | undefined>
```

**Returns:** <code>Promise&lt;<a href="#battery">Battery</a>&gt;</code>

--------------------


### stop()

```typescript
stop() => Promise<void>
```

--------------------


### addListener('batteryChange', ...)

```typescript
addListener(eventName: 'batteryChange', listenerFunc: (event: Battery) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                            |
| ------------------ | --------------------------------------------------------------- |
| **`eventName`**    | <code>'batteryChange'</code>                                    |
| **`listenerFunc`** | <code>(event: <a href="#battery">Battery</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### Interfaces


#### Battery

| Prop                  | Type                                                            |
| --------------------- | --------------------------------------------------------------- |
| **`level`**           | <code>number</code>                                             |
| **`hasBattery`**      | <code>boolean</code>                                            |
| **`isCharging`**      | <code>boolean</code>                                            |
| **`chargingTime`**    | <code>number</code>                                             |
| **`dischargingTime`** | <code>number</code>                                             |
| **`currentCapacity`** | <code>number</code>                                             |
| **`totalCapacity`**   | <code>number</code>                                             |
| **`realPercentage`**  | <code>number</code>                                             |
| **`technology`**      | <code>string</code>                                             |
| **`temperature`**     | <code>number</code>                                             |
| **`voltage`**         | <code>number</code>                                             |
| **`amperage`**        | <code>number</code>                                             |
| **`wattage`**         | <code>number</code>                                             |
| **`health`**          | <code><a href="#batteryhealth">BatteryHealth</a></code>         |
| **`status`**          | <code><a href="#batterystatus">BatteryStatus</a></code>         |
| **`chargeMode`**      | <code><a href="#batterychargemode">BatteryChargeMode</a></code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### BatteryHealth

| Members            |
| ------------------ |
| **`UNKNOWN`**      |
| **`COLD`**         |
| **`DEAD`**         |
| **`GOOD`**         |
| **`OVERHEAT`**     |
| **`OVER_VOLTAGE`** |
| **`FAILURE`**      |


#### BatteryStatus

| Members            |
| ------------------ |
| **`UNKNOWN`**      |
| **`NOT_CHARGING`** |
| **`DISCHARGING`**  |
| **`CHARGING`**     |
| **`FULL`**         |


#### BatteryChargeMode

| Members        |
| -------------- |
| **`UNKNOWN`**  |
| **`AC`**       |
| **`USB`**      |
| **`DOCK`**     |
| **`WIRELESS`** |

</docgen-api>
