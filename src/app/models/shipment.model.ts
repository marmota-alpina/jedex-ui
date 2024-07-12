export interface Dimensions {
  height: number;
  width: number;
  length: number;
}

export interface ShipmentCalculation {
  contract_id: string;
  origin_postal_code: string;
  destination_postal_code: string;
  weight: number;
  dimensions: Dimensions;
  shipment_type: string;
}

export interface Distance {
  origin: string;
  destination: string;
  distance: number;
  distance_unit: string;
}

export interface FreightResponse {
  shipment_type: string;
  freight_cost: number;
  duration: number;
  chargeable_weight: number;
  weight_unit: string;
  duration_unit: string;
  distance: Distance;
}
