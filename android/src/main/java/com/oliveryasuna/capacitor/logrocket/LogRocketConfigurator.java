package com.oliveryasuna.capacitor.logrocket;

import com.getcapacitor.PluginCall;
import com.logrocket.core.Configuration;
import com.logrocket.core.SDK;

public class LogRocketConfigurator implements SDK.OptionsConfiguration {

  public LogRocketConfigurator(final PluginCall call) {
    super();

    this.call = call;
  }

  private final PluginCall call;

  @Override
  public void configure(final Configuration configuration) {
    configuration.setAppID(getCall().getString("appId"));
    configuration.setLogLevel(SDK.LogLevel.DEBUG);
    configuration.setEnablePersistence(false);
  }

  public PluginCall getCall() {
    return call;
  }

}
