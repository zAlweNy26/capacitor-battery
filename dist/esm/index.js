import { registerPlugin } from '@capacitor/core';
const Battery = registerPlugin('Battery', {
    web: () => import('./web').then(m => new m.BatteryWeb()),
});
export * from './definitions';
export { Battery };
//# sourceMappingURL=index.js.map