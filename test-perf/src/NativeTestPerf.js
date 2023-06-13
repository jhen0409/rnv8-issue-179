// @flow
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  test(input?: Array<number>): Promise<Array<number>>;
}
export default (TurboModuleRegistry.get<Spec>(
  'TestPerf'
): ?Spec);
