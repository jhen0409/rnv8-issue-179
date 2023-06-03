package com.testv8nativebridge;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableNativeArray;

import java.util.Map;
import java.util.HashMap;

public class TestModule extends ReactContextBaseJavaModule {
  public static final String REACT_CLASS = "TestModule";
  private ReactApplicationContext reactContext = null;

  public TestModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @ReactMethod
  public void test(ReadableArray input, Promise promise) {
    WritableNativeArray result = new WritableNativeArray();
    for (int i = 0; i < input.size(); i++) {
      result.pushInt(input.getInt(i));
    }
    promise.resolve(result);
  }
}