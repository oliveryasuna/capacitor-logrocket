import Foundation
import Capacitor
import LogRocket

@objc(CapacitorLogRocketPlugin)
public class CapacitorLogRocketPlugin: CAPPlugin {

  @objc func _nativeInit(_ call: CAPPluginCall) {
    guard let configuration: Configuration = createConfiguration(call) else {
      call.reject("Missing required `appID`.")

      return
    }

    SDK.initialize(configuration: configuration)

    call.resolve()
  }

  private func createConfiguration(_ call: CAPPluginCall) -> Configuration? {
    guard let appID: String = call.getString("appID") else {
      return nil
    }

    let result: Configuration = Configuration(appID: appID)

    if let serverURL: String = call.getString("serverURL") {
      result.serverURL = serverURL
    }

    return result
  }

}
