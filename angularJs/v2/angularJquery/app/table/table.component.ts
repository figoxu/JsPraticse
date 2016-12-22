import {Component } from '@angular/core';
import {Router} from '@angular/router';
declare var jQuery:any;
@Component({
    selector:'table',
    templateUrl:'app/table/table.html'
})

export class TableComponent {

    ngOnInit():any{
        var $ = jQuery;
        $('#buildTable').bind('click', function(e) {
            e.preventDefault();
            $('#tablePlaceholder').empty().buildTable();
        });

        $('#runPlugin').bind('click', function(e) {
            e.preventDefault();
            var confParam = {
                height: '400'
                , altClass: 'odd'
                , themeClass: 'fancyDarkTable'
                ,fixedColumns:1
                ,fixedColumn:true
            };
            $('#tablePlaceholder table').fixedHeaderTable(confParam);
        });
    }

}

