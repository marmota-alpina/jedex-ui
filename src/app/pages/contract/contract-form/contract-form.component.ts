import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContractService } from "../../../services/contract.service";
import { CompanyService } from "../../../services/company.service";
import { Company } from "../../../models/company.model";

@Component({
  standalone: true,
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class ContractFormComponent implements OnInit {
  contractForm!: FormGroup;
  isEditMode = false;
  id = this.route.snapshot.paramMap.get('id');
  companies: Company[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    protected router: Router,
    private contractService: ContractService,
    private companyService: CompanyService,
  ) {}

  ngOnInit(): void {
    this.contractForm = this.fb.group({
      company_id: [''],
      start_date: [''],
      end_date: [''],
      dimensional_factor: [''],
      ranges: this.fb.array([]),
    });

    if (this.id) {
      this.isEditMode = true;
      this.contractService.getContract(this.id).subscribe((contract) => {
        this.contractForm.patchValue({
          ...contract,
          start_date: this.formatDate(contract.start_date),
          end_date: this.formatDate(contract.end_date),
        }
        );
        this.setRanges(contract.ranges);
      });
    }

    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  get ranges(): FormArray {
    return this.contractForm.get('ranges') as FormArray;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  setRanges(ranges: any[]): void {
    const rangeFGs = ranges.map(range => this.fb.group(range));
    const rangeFormArray = this.fb.array(rangeFGs);
    this.contractForm.setControl('ranges', rangeFormArray);
  }

  addRange(): void {
    this.ranges.push(this.fb.group({
      start_postal_code: [''],
      end_postal_code: [''],
      delivery_rate_per_kg: ['']
    }));
  }

  removeRange(index: number): void {
    this.ranges.removeAt(index);
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.contractService.updateContract(this.id!, this.contractForm.value).subscribe(() => {
        this.router.navigate(['/contracts']);
      });
    } else {
      this.contractService.createContract(this.contractForm.value).subscribe(() => {
        this.router.navigate(['/contracts']);
      });
    }
  }
}
