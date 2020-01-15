import { Trip, TripType } from './types/index';

const dewLds: Trip = {
  from: 'DEW',
  to: 'LDS',
  type: TripType.OUTBOUND_TRIP,
};

const ldsDew: Trip = {
  from: 'LDS',
  to: 'DEW',
  type: TripType.INBOUND_TRIP,
};

// const btlLds: Trip = {
//   from: 'BTL',
//   to: 'LDS',
//   type: TripType.OUTBOUND_TRIP,
// };

// const ldsBtl: Trip = {
//   from: 'LDS',
//   to: 'BTL',
//   type: TripType.INBOUND_TRIP,
// };

const trips: Trip[] = [
  dewLds,
  ldsDew,
  // btlLds,
  // ldsBtl
];

export { trips };
