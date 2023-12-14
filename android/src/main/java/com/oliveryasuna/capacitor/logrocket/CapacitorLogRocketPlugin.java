package com.oliveryasuna.capacitor.logrocket;

import android.app.Application;
import android.content.Context;
import android.util.Log;
import android.webkit.WebView;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.logrocket.core.SDK;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

// TODO: Rename to `Plugin`.
@CapacitorPlugin(name = "CapacitorLogRocket")
public class CapacitorLogRocketPlugin extends Plugin {

  private Application application;

  private Context context;

  private WebView webView;

  @Override
  public void load() {
    Log.println(Log.DEBUG, "CapacitorLogRocket", "Loading CapacitorLogRocketPlugin...");

    application = getActivity().getApplication();
    context = getContext();
    webView = getBridge().getWebView();
  }

  @PluginMethod
  public void _nativeInit(final PluginCall call) {
    Log.println(Log.DEBUG, "CapacitorLogRocket", "Initializing LogRocket...");

    SDK.init(application, context, new LogRocketConfigurator(call));
    SDK.registerWebView(webView);

    call.resolve();
  }

  @PluginMethod
  public void _nativeGetSessionUrl(final PluginCall call) {
    Log.println(Log.DEBUG, "CapacitorLogRocket", "Getting session URL...");

    SDK.getSessionURL(sessionUrl -> {
      call.resolve(new JSObject().put("sessionUrl", sessionUrl));
    });
  }

  @PluginMethod
  public void _nativeIdentify(final PluginCall call) {
    Log.println(Log.DEBUG, "CapacitorLogRocket", "Identifying user...");

    if(call.hasOption("userInfo")) {
      final JSObject userInfoJSObject = call.getObject("userInfo");
      final Iterator<String> keysIterator = userInfoJSObject.keys();

      final Map<String, String> userInfo = new HashMap<>();

      while(keysIterator.hasNext()) {
        final String key = keysIterator.next();
        final String value = userInfoJSObject.getString(key);

        userInfo.put(key, value);
      }

      SDK.identify(call.getString("userId"), userInfo);
    } else {
      SDK.identify(call.getString("userId"));
    }
  }

}
