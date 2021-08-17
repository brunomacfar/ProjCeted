import { Component, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment-timezone';

/**
* A moment timezone pipe to support parsing based on time zone abbreviations
* covers all cases of offset variation due to daylight saving.
*
* Same API as DatePipe with additional timezone abbreviation support
* Official date pipe dropped support for abbreviations names from
Angular V5
*/
@Pipe({
  name: 'momentDate'
})

export class MomentDatePipeComponent extends DatePipe implements PipeTransform {

  transform(
    value: string | Date,
    format: string = 'mediumDate',
    timezone: string = 'America/Sao_Paulo'
  ): string {
    const timezoneOffset = moment(value).tz(timezone).format('Z');
    return super.transform(value,format, timezoneOffset);
  }

}
