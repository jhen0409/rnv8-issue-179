package com.rnv8test;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableNativeArray;

import java.util.Map;
import java.util.HashMap;

import android.util.Log;

public class TestPerfModule extends ReactContextBaseJavaModule {
  public static final String REACT_CLASS = "TestPerf";
  private ReactApplicationContext reactContext = null;

  public TestPerfModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @ReactMethod
  public void test(ReadableArray input, Promise promise) {
    long t0 = System.currentTimeMillis();
    WritableNativeArray result = new WritableNativeArray();
    for (int i = 0; i < input.size(); i++) {
      result.pushInt(input.getInt(i));
    }
    promise.resolve(result);
    long t1 = System.currentTimeMillis();
    Log.d("TestPerf", "test: " + (t1 - t0) + "ms");
  }
}