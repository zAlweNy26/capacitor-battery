import Foundation

@objc public class Battery: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
