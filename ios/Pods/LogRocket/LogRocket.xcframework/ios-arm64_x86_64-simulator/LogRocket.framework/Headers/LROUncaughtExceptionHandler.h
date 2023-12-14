#import <Foundation/Foundation.h>
#ifndef LROUncaughtExceptionHandler_h
#define LROUncaughtExceptionHandler_h

@interface LROUncaughtExceptionHandler : NSObject

+ (void)setSessionDetailsWithRecordingID:(NSString *)recordingID sessionID:(NSString *)sessionID appID:(NSString *)appID startTime:(double)startTime release:(NSString *)release debugModules:(NSData *)debugModules;

+ (void)setEnabled:(bool)isEnabled;

+ (void)updateCurrentURL:(NSString *)currentURL;

+ (void)updateSessionDetailsWithRecordingID:(NSString *)recordingID sessionID:(NSString *)sessionID startTime:(double)startTime;

@end

#endif /* LROUncaughtExceptionHandler_h */
