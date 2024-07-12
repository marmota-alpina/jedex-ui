import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CompanyService } from "../../../services/company.service";
import { Company } from "../../../models/company.model";

@Component({
  standalone: true,
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
})
export class CompanyFormComponent implements OnInit {
  companyForm!: FormGroup;
  isEditMode = false;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    protected router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      register_number: ['', Validators.required],
      name: ['', Validators.required],
      address: ['',  Validators.required],
      city: ['',  Validators.required],
      state: ['',  Validators.required],
      postal_code: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      phone: ['',  [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['',  [Validators.required, Validators.email]],
    });


    if (this.id) {
      this.isEditMode = true;
      this.companyService.getCompany(this.id).subscribe((company) => {
        this.companyForm.patchValue(company);
      });
    }
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      const company: Company = this.companyForm.value;
      console.log({company, isEditMode: this.isEditMode})

      if (this.isEditMode) {
        this.companyService.updateCompany(this.id!, company).subscribe(() => {
          this.router.navigate(['/companies']);
        });
      } else {
        this.companyService.createCompany(company).subscribe(() => {
          this.router.navigate(['/companies']);
        });
      }
    } else {
      alert('Form is invalid');
      console.log(this.companyForm.errors)
    }
  }
}
