// @flow
import { NativeModules } from 'react-native'

const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TestPerfModule = isTurboModuleEnabled ?
  require("./NativeTestPerf").default :
  NativeModules.TestPerf;

console.log(isTurboModuleEnabled, TestPerfModule)

export default TestPerfModule;