import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { serverResponse } from '../mocks/serverResponse';
import { WorkOrder } from '../model/work-order.model';
import { Employee } from '../model/worker.model';

@Injectable({
  providedIn: 'root',
})
export class ApiConnectionService {
  getWorkOrder(workOrderId: number | null, description: string) {
    const workOrdersOutput: WorkOrder[] = [];
    for (const workOrder of serverResponse.response.data) {
      if (
        (!workOrderId || workOrder.work_order_id === workOrderId) &&
        workOrder.description.toLowerCase().includes(description.toLowerCase())
      ) {
        const employees: Employee[] = [];
        for (const employee of workOrder.assigned_to) {
          employees.push({
            personName: employee.person_name,
            status: employee.status,
          });
        }
        workOrdersOutput.push({
          workOrderId: workOrder.work_order_id,
          description: workOrder.description,
          receivedDate: workOrder.received_date,
          assignedTo: employees,
          status: workOrder.status,
          priority: workOrder.priority,
        });
      }
    }
    return of(workOrdersOutput);
  }
}
