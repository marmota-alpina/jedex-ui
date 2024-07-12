import { Routes } from '@angular/router';
import { CompanyListComponent } from "./pages/company/company-list/company-list.component";
import { CompanyFormComponent } from "./pages/company/company-form/company-form.component";
import { CompanyDetailComponent } from "./pages/company/company-detail/company-detail.component";
import { ContractListComponent } from "./pages/contract/contract-list/contract-list.component";
import { ContractFormComponent } from "./pages/contract/contract-form/contract-form.component";
import { ContractDetailComponent } from "./pages/contract/contract-detail/contract-detail.component";

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'company/new', component: CompanyFormComponent },
  { path: 'company/edit/:id', component: CompanyFormComponent },
  { path: 'company/:id', component: CompanyDetailComponent },
  { path: 'contracts', component: ContractListComponent },
  { path: 'contract/new', component: ContractFormComponent },
  { path: 'contract/edit/:id', component: ContractFormComponent },
  { path: 'contract/:id', component: ContractDetailComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: '**', redirectTo: '/companies' },
];
