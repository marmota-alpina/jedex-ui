import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Company } from "../../../models/company.model";
import { CompanyService } from "../../../services/company.service";

@Component({
  standalone: true,
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  imports: [CommonModule],
})
export class CompanyDetailComponent implements OnInit {
  company!: Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyService.getCompany(id).subscribe((company) => {
        this.company = company;
      });
    }
  }
}
