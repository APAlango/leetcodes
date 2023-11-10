import type { PageLoad } from './$types';
import { getQuote } from '$lib/server/mock-service';

export const load: PageLoad = async () => {
  const response = await getQuote();
  
  return { quote: response };
};