import { NationalRailWrapper } from 'ts-national-rail-wrapper';
import { response, env, getTrips } from './util';
import { Response } from './types/index';

let apiKey: ApiToken | null = null;
let nationalRail: NationalRailWrapper | null = null;

const handler = async (): Promise<Response> => {
  if (!apiKey) {
    apiKey = await env('API_KEY', true);
  }

  if (!nationalRail) {
    nationalRail = new NationalRailWrapper(apiKey);
  }

  const tripData = await getTrips(nationalRail);

  console.log({
    tripData,
  });

  return response({
    statusCode: 200,
    body: tripData,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { handler };
