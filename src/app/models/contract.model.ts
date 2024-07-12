export interface Range {
  start_postal_code: string;
  end_postal_code: string;
  delivery_rate_per_kg: number;
}

export interface Contract {
  id: string;
  company_id: string;
  start_date: string;
  end_date: string;
  dimensional_factor: number;
  ranges: Range[];
}
