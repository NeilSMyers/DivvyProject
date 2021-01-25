//
//  RCTBarGraphModule.m
//  DivvyBusinessIntel
//
//  Created by Neil Myers on 1/20/21.
//

#import <Foundation/Foundation.h>
#import "RCTBarGraphModule.h"
#import <React/RCTLog.h>

@implementation BarGraphModule

RCT_EXPORT_MODULE(BarGraph);

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
