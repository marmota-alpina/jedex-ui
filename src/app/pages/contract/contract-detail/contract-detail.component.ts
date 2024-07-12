import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Contract } from "../../../models/contract.model";
import { ContractService } from "../../../services/contract.service";

@Component({
  standalone: true,
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css'],
  imports: [CommonModule],
})
export class ContractDetailComponent implements OnInit {
  contract!: Contract;

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contractService.getContract(id).subscribe((contract) => {
        this.contract = contract;
      });
    }
  }
}
