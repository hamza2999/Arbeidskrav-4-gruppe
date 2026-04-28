import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'b2a0jmwd',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-04-28',
});

export default client;
