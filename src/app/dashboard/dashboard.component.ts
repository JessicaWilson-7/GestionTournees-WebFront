import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalTours = 0;
  activeUsers = 0;
  recentNotifications = 0;

  constructor(private authService: AuthService, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchStats();
  }

  fetchStats(): void {
    const stats = this.dashboardService.getStats();
    this.totalTours = stats.totalTours;
    this.activeUsers = stats.activeUsers;
    this.recentNotifications = stats.recentNotifications;
  }

  logout(): void {
    this.authService.logout();
  }

}
