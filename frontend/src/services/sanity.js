import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

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

export async function getValue() {
  return await client.fetch(`*[_type == 'value']{
  _id,
  title,
    description,
    icon
  }`);

}

export async function getEventDetails() {
  return await client.fetch(`*[_type == 'event']{
    title,
    image,
    slug,
    eventDateTime,
    location,
    category,
    price,
    maxParticipants,
    description,
    whatToBring,
    description,
    hostName,
    hostBio,
    hostAvatar
  }`);

}
