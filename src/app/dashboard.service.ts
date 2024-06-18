import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  getStats(): any{
    return{
      TotalTours: 50,
      activeUsers: 20,
      recentNotifications: 5
    };
  }
}
