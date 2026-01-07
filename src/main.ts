import './polyfills';
import {
  enableProdMode,
  importProvidersFrom,
} from '@angular/core';
import { environment } from './environments/environment';

import { GaService } from './app/demo/common/services/ga/ga.service';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { DemoComponent } from './app/demo/demo.component';
import { DayTimeDemoComponent } from './app/demo/date-pickers/day-time/day-time-demo/day-time-demo.component';
import { DayTimeInlineDemoComponent } from './app/demo/date-pickers/day-time/day-time-inline-demo/day-time-inline-demo.component';
import { DayTimeDirectiveDemoComponent } from './app/demo/date-pickers/day-time/day-time-directive-demo/day-time-directive-demo.component';
import { DayDemoComponent } from './app/demo/date-pickers/day/day-demo/day-demo.component';
import { DayInlineDemoComponent } from './app/demo/date-pickers/day/day-inline-demo/day-inline-demo.component';
import { DayDirectiveDemoComponent } from './app/demo/date-pickers/day/day-directive-demo/day-directive-demo.component';
import { MonthDemoComponent } from './app/demo/date-pickers/month/month-demo/month-demo.component';
import { MonthInlineDemoComponent } from './app/demo/date-pickers/month/month-inline/month-inline-demo.component';
import { MonthDirectiveDemoComponent } from './app/demo/date-pickers/month/month-directive-demo/month-directive-demo.component';
import { TimeDemoComponent } from './app/demo/date-pickers/time/time-demo/time-demo.component';
import { TimeInlineDemoComponent } from './app/demo/date-pickers/time/time-inline-demo/time-inline-demo.component';
import { TimeDirectiveDemoComponent } from './app/demo/date-pickers/time/time-directive-demo/time-directive-demo.component';
import { DemoRootComponent } from './app/demo-root.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(DemoRootComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule),
    GaService,
    provideRouter([
      {
        path: '',
        component: DemoComponent,
        children: [
          {
            path: '',
            redirectTo: 'daytimePicker',
            pathMatch: 'full',
          },
          {
            path: 'daytimePicker',
            component: DayTimeDemoComponent,
          },
          {
            path: 'daytimeInline',
            component: DayTimeInlineDemoComponent,
          },
          {
            path: 'daytimeDirective',
            component: DayTimeDirectiveDemoComponent,
          },
          {
            path: 'dayPicker',
            component: DayDemoComponent,
          },
          {
            path: 'dayInline',
            component: DayInlineDemoComponent,
          },
          {
            path: 'dayDirective',
            component: DayDirectiveDemoComponent,
          },
          {
            path: 'monthPicker',
            component: MonthDemoComponent,
          },
          {
            path: 'monthInline',
            component: MonthInlineDemoComponent,
          },
          {
            path: 'monthDirective',
            component: MonthDirectiveDemoComponent,
          },
          {
            path: 'timePicker',
            component: TimeDemoComponent,
          },
          {
            path: 'timeInline',
            component: TimeInlineDemoComponent,
          },
          {
            path: 'timeDirective',
            component: TimeDirectiveDemoComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
});
