http://www.cnblogs.com/sorex/archive/2011/06/30/2093499.html
自然在各自的外层都要用div框起来，以便后面的浮动和覆盖等等，所以结构的html如下：(所有的数据填充在MyTable这个table内，其他div，table保留此原样即可)<br/>

<div id="MyTable_tableLayout">
    <div id="MyTable_tableFix">
        <table id="MyTable_tableFixClone" border="1" cellspacing="0" cellpadding="0"></table>
    </div>
    <div id="MyTable_tableHead">
        <table id="MyTable_tableHeadClone" border="1" cellspacing="0" cellpadding="0"></table>
    </div>
    <div id="MyTable_tableColumn">
        <table id="MyTable_tableColumnClone" border="1" cellspacing="0" cellpadding="0"></table>
    </div>
    <div id="MyTable_tableData">
        <table id="MyTable" border="1" cellspacing="0" cellpadding="0"></table>
    </div>
</div>