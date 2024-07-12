import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ContractService } from "../../../services/contract.service";

@Component({
  standalone: true,
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
})
export class ContractListComponent implements OnInit {
  contracts$ = this.contractService.getContracts();
  displayedColumns: string[] = ['company_id', 'start_date', 'end_date', 'actions'];

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {

  }

  deleteContract(id: string): void {
    this.contractService.deleteContract(id).subscribe(() => {
      this.contracts$ = this.contractService.getContracts();
    });
  }
}
