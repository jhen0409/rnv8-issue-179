/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  NativeModules
} from 'react-native';

function App(): JSX.Element {
  const trigerTestModule = async () => {
    // construct 2000000 items array
    const array = Array.from(Array(20000).keys());
    // call native module (run 10 times)
    for (let i = 0; i < 10; i++) {
      const t0 = performance.now();
      await NativeModules.TestModule.test(array);
      const t1 = performance.now();
      console.log(`Call to test took ${t1 - t0} milliseconds.`);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={trigerTestModule}>
        <Text>Test</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;
