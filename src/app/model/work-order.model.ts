import { Employee } from './worker.model';

export interface WorkOrder {
  workOrderId: number;
  description: string;
  receivedDate: string;
  assignedTo: Employee[];
  status: string;
  priority: string;
}
