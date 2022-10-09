import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { WorkOrder } from 'src/app/model/work-order.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dataSource!: WorkOrder[];

  columns = [
    {
      columnDef: 'workOrderId',
      header: 'Work Order #',
      cell: (element: WorkOrder) => `${element.workOrderId}`,
    },
    {
      columnDef: 'priority',
      header: 'Priority',
      cell: (element: WorkOrder) => `${element.priority}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: WorkOrder) => `${element.description}`,
    },
    {
      columnDef: 'receivedDate',
      header: 'Received Date',
      cell: (element: WorkOrder) => `${element.receivedDate}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: WorkOrder) => `${element.status}`,
    },
    {
      columnDef: 'assignedTo',
      header: 'Assigned To',
      cell: (element: WorkOrder) =>
        `${element.assignedTo[element.assignedTo.length - 1].personName}`,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor() {}

  ngOnInit(): void {}
}
