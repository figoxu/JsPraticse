import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableComponent} from "./table.component";
import tableRoute from "./table.route";
@NgModule({
    imports:[CommonModule, tableRoute,],
    declarations: [TableComponent]
})
export default class TableModule{}