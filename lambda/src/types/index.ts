export interface ResponseInput {
  statusCode: number;
  headers?: object;
  body: string | object;
}

export interface Response {
  statusCode: number;
  headers: object;
  body: string | object;
}

export enum TripType {
  INBOUND_TRIP = 'inbound',
  OUTBOUND_TRIP = 'outbound',
}

export interface Trip {
  from: string;
  to: string;
  type: TripType;
}
