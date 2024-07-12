import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CompanyService } from "../../../services/company.service";

@Component({
  standalone: true,
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
})
export class CompanyListComponent implements OnInit {
  companies$ = this.companyService.getCompanies();
  displayedColumns: string[] = ['register_number', 'name', 'actions'];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {

  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.companies$ = this.companyService.getCompanies();
    });
  }
}
