/**
 * App component handles the initial app component initialization,
 * whether or not the user needs to log in, or just basic UI events.
 * @Author Ryan Borgeson
 **/
import { Component, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LineChartDirective } from './directives/LineChart.directive';
import { DataService } from './services/DataService.service';

@Component({
    selector: 'application',
    templateUrl: 'app/views/app.component.html',
    directives: [LineChartDirective, ROUTER_DIRECTIVES],
    providers: [DataService]
})
export class AppComponent implements OnInit {

    public Details: Object;

    constructor(private _DataService: DataService) {

    }


    ngOnInit() {
        this._DataService.GetData().subscribe(res => this.Details = res);
        

        setInterval(() => { this._DataService.GetData().subscribe(res => this.Details = res); }, 1000);
       // this.Details = [{ "Sales": "233.20", "TimeStamp": "2016-10-22 11:49:21" }, { "Sales": "143.63", "TimeStamp": "2016-10-22 14:07:46" }, { "Sales": "212.53", "TimeStamp": "2016-10-22 15:04:03" }, { "Sales": "39.22", "TimeStamp": "2016-10-24 10:57:44" }, { "Sales": "331.08", "TimeStamp": "2016-10-24 11:23:15" }, { "Sales": "47.70", "TimeStamp": "2016-10-24 12:15:38" }, { "Sales": "126.14", "TimeStamp": "2016-10-24 14:35:16" }, { "Sales": "1.06", "TimeStamp": "2016-10-24 15:38:39" }, { "Sales": "5.30", "TimeStamp": "2016-10-24 16:44:46" }, { "Sales": "199.28", "TimeStamp": "2016-10-25 11:48:47" }, { "Sales": "188.68", "TimeStamp": "2016-10-25 12:02:00" }, { "Sales": "304.22", "TimeStamp": "2016-10-25 15:18:25" }, { "Sales": "21.20", "TimeStamp": "2016-10-25 16:01:59" }, { "Sales": "0.00", "TimeStamp": "2016-10-25 17:19:09" }, { "Sales": "169.00", "TimeStamp": "2016-10-26 10:49:07" }, { "Sales": "662.92", "TimeStamp": "2016-10-26 16:06:22" }, { "Sales": "186.56", "TimeStamp": "2016-10-26 17:03:01" }, { "Sales": "1504.17", "TimeStamp": "2016-10-27 11:31:37" }, { "Sales": "100.00", "TimeStamp": "2016-10-27 13:09:26" }, { "Sales": "5.30", "TimeStamp": "2016-10-27 14:29:32" }, { "Sales": "132.50", "TimeStamp": "2016-10-27 16:13:02" }, { "Sales": "221.00", "TimeStamp": "2016-10-28 11:42:59" }, { "Sales": "21.20", "TimeStamp": "2016-10-28 12:31:16" }, { "Sales": "361.46", "TimeStamp": "2016-10-28 13:16:58" }, { "Sales": "64.66", "TimeStamp": "2016-10-28 15:06:48" }, { "Sales": "3.18", "TimeStamp": "2016-10-28 16:27:42" }, { "Sales": "46.02", "TimeStamp": "2016-10-28 18:03:48" }, { "Sales": "5.30", "TimeStamp": "2016-10-29 12:17:02" }, { "Sales": "729.55", "TimeStamp": "2016-10-29 13:10:03" }, { "Sales": "2.12", "TimeStamp": "2016-10-29 14:25:59" }, { "Sales": "5.00", "TimeStamp": "2016-10-31 10:50:47" }, { "Sales": "117.66", "TimeStamp": "2016-10-31 11:56:45" }, { "Sales": "43.46", "TimeStamp": "2016-10-31 12:06:09" }, { "Sales": "299.13", "TimeStamp": "2016-10-31 13:18:07" }, { "Sales": "54.06", "TimeStamp": "2016-10-31 15:11:29" }, { "Sales": "3.18", "TimeStamp": "2016-10-31 17:24:04" }, { "Sales": "104.97", "TimeStamp": "2016-11-01 10:53:01" }, { "Sales": "14.84", "TimeStamp": "2016-11-01 11:53:35" }, { "Sales": "211.10", "TimeStamp": "2016-11-01 13:39:27" }, { "Sales": "363.58", "TimeStamp": "2016-11-01 14:06:26" }, { "Sales": "0.00", "TimeStamp": "2016-11-01 15:54:41" }, { "Sales": "0.00", "TimeStamp": "2016-11-02 11:11:59" }, { "Sales": "33.92", "TimeStamp": "2016-11-02 15:27:34" }, { "Sales": "17.49", "TimeStamp": "2016-11-02 17:20:26" }, { "Sales": "10.60", "TimeStamp": "2016-11-03 10:14:12" }, { "Sales": "3.18", "TimeStamp": "2016-11-03 11:12:20" }, { "Sales": "265.00", "TimeStamp": "2016-11-03 12:49:17" }, { "Sales": "137.80", "TimeStamp": "2016-11-03 13:14:32" }, { "Sales": "56.18", "TimeStamp": "2016-11-03 15:29:46" }, { "Sales": "62.54", "TimeStamp": "2016-11-04 11:19:47" }, { "Sales": "89.50", "TimeStamp": "2016-11-04 12:11:37" }, { "Sales": "84.80", "TimeStamp": "2016-11-04 14:55:27" }, { "Sales": "21.20", "TimeStamp": "2016-11-04 15:58:49" }, { "Sales": "198.43", "TimeStamp": "2016-11-04 17:26:23" }, { "Sales": "59.36", "TimeStamp": "2016-11-05 10:06:49" }, { "Sales": "31.80", "TimeStamp": "2016-11-05 11:07:35" }, { "Sales": "152.43", "TimeStamp": "2016-11-05 13:20:40" }, { "Sales": "11.66", "TimeStamp": "2016-11-05 14:19:37" }, { "Sales": "0.53", "TimeStamp": "2016-11-05 15:11:52" }, { "Sales": "0.53", "TimeStamp": "2016-11-07 11:53:31" }, { "Sales": "22.26", "TimeStamp": "2016-11-07 14:05:30" }, { "Sales": "10.60", "TimeStamp": "2016-11-07 15:09:22" }, { "Sales": "48.76", "TimeStamp": "2016-11-07 16:08:20" }, { "Sales": "37.10", "TimeStamp": "2016-11-08 12:10:20" }, { "Sales": "80.56", "TimeStamp": "2016-11-08 15:22:25" }, { "Sales": "24.38", "TimeStamp": "2016-11-08 16:08:11" }, { "Sales": "33.92", "TimeStamp": "2016-11-08 17:00:29" }, { "Sales": "27.56", "TimeStamp": "2016-11-09 13:29:07" }, { "Sales": "337.08", "TimeStamp": "2016-11-09 14:46:24" }, { "Sales": "10.60", "TimeStamp": "2016-11-09 16:59:43" }, { "Sales": "3.18", "TimeStamp": "2016-11-09 17:15:39" }, { "Sales": "1477.94", "TimeStamp": "2016-11-10 10:57:40" }, { "Sales": "21.20", "TimeStamp": "2016-11-10 12:22:23" }, { "Sales": "114.48", "TimeStamp": "2016-11-10 13:29:24" }, { "Sales": "67.84", "TimeStamp": "2016-11-10 15:56:53" }, { "Sales": "31.80", "TimeStamp": "2016-11-10 16:37:33" }, { "Sales": "426.12", "TimeStamp": "2016-11-10 17:39:13" }, { "Sales": "26.50", "TimeStamp": "2016-11-11 12:11:54" }, { "Sales": "193.45", "TimeStamp": "2016-11-11 15:01:20" }, { "Sales": "374.77", "TimeStamp": "2016-11-11 16:18:32" }, { "Sales": "182.53", "TimeStamp": "2016-11-12 10:41:00" }];
    }
    
}