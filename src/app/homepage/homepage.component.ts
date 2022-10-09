import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../model/work-order.model';
import { ApiConnectionService } from '../services/api-connection.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  description: string = '';
  workOrderId!: number | null;
  workOrders: WorkOrder[] = [];

  constructor(private apiConnectionService: ApiConnectionService) {}

  ngOnInit(): void {}

  onSearch() {
    if (this.description || this.workOrderId) {
      this.apiConnectionService
        .getWorkOrder(this.workOrderId, this.description)
        .subscribe({
          next: (response) => {
            if (!response[0]) return;
            this.workOrders = response;
          },
          error: (error) =>
            alert('Error occured while receiving data: ' + error),
        });
    }
  }

  onClear() {
    this.description = '';
    this.workOrderId = null;
    this.workOrders = [];
  }
}
