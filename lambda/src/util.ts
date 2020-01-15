import { NationalRailWrapper } from 'ts-national-rail-wrapper';
import { decryptValue } from './kms';
import { trips } from './config';
import { Response, ResponseInput, TripType } from './types/index';

const defaultHeaders = {
  'Content-Type': 'text/html',
};

const response = ({ statusCode, headers = defaultHeaders, body }: ResponseInput): Response => {
  return {
    statusCode,
    headers,
    body,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env = async (key: string, isEncrypted: boolean, defaultValue: any = null): Promise<string> => {
  if (!process.env[key]) {
    return defaultValue;
  }

  if (!isEncrypted) {
    return process.env[key];
  }

  return decryptValue(process.env[key]);
};

const getTrips = async (nationalRail: NationalRailWrapper): Promise<FormattedResponse[]> => {
  const data = trips.map(trip => {
    if (trip.type === TripType.OUTBOUND_TRIP) {
      return nationalRail.getDepartures({ fromStation: trip.from, toStation: trip.to, count: 5 });
    }

    if (trip.type === TripType.INBOUND_TRIP) {
      return nationalRail.getArrivals({ fromStation: trip.from, toStation: trip.to, count: 5 });
    }

    return null;
  });

  return Promise.all(data);
};

export { response, env, getTrips };
