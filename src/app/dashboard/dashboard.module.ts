import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {MapChartModule} from "./map-chart/map-chart.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {LineChartModule} from "./line-chart/line-chart.module";
import {AreaChartModule} from "./area-chart/area-chart.module";

const routes: Routes = [
  { path: '', component: DashboardComponent },
];


@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MapChartModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    LineChartModule,
    AreaChartModule
  ],
})
export class DashboardModule { }
