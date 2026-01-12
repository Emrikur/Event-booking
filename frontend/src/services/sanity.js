import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-01-01",
});

export async function getHero() {
  return await client.fetch(`*[_type == "hero"][0]{
    title,
    subtitle,
    image{
      asset->{
        url
      }
    }
  }`);
}

export async function getTeam() {
  return await client.fetch(`*[_type == 'team']{
  _id,
  firstName,
    surname,
    initials,
    role,
    description}`);
}
