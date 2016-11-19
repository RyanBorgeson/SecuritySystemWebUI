/**
 * Dashboard component handles all the graphs, statistics, and
 * information shown on the dashboard.
 * @Author Ryan Borgeson
 **/
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    templateUrl: 'app/views/Dashboard.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent implements OnInit {

    

    constructor() {
    }

}