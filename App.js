import React, {useState} from 'react';
import {SafeAreaView, Text, Pressable} from 'react-native';
import TestModule from 'react-native-test-perf/src';

function App() {
  const [logs, setLogs] = useState([]);
  const trigerTestModule = async () => {
    setLogs([]);
    // construct 2000000 items array
    const array = Array.from(Array(20000).keys());
    // call native module (run 10 times)
    for (let i = 0; i < 10; i++) {
      const t0 = performance.now();
      await TestModule.test(array);
      const took = performance.now() - t0;
      console.log(`Call to test took ${took} milliseconds.`);
      setLogs(logs => [...logs, `Call to test took ${took} milliseconds.`]);
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={trigerTestModule}>
        <Text>Test</Text>
      </Pressable>
      {logs.map((log, index) => (
        <Text key={index}>{log}</Text>
      ))}
    </SafeAreaView>
  );
}

export default App;
