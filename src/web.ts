import { WebPlugin } from '@capacitor/core';

import type { BatteryPlugin } from './definitions';

export class BatteryWeb extends WebPlugin implements BatteryPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
