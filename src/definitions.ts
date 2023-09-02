export interface BatteryPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
