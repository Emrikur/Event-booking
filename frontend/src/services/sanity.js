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
  return await client.fetch(`*[_type == "hero" && pageId == "home"][0]{
    _id,
    title,
    subtitle,
    image{
      asset->{
        url
      }
    }
  }`);
}

export async function getAboutHero() {
  return await client.fetch(`*[_type == "hero" && pageId == "about"][0]{
    _id,
    title,
    subtitle,
    image{
      asset->{
        url
      }
    }
  }`);
}

export async function getAboutMission() {
  return await client.fetch(`*[_type == 'aboutMission']{
    _id,
    title,
    description
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

export async function getEvents() {
  return await client.fetch(`*[_type == 'event']{
    _id,
    title,
    image{
      asset->{
        url
      },
      alt
    },
    eventDateTime,
    location,
    category->{
      title
    },
    maxParticipants,
    description,
    price
  }`);
}

export async function getCategories() {
  return await client.fetch(`*[_type == "category"]{
    _id,
    title,
    slug
  }`);
}

export async function getUpcomingEvents(limit = 3) {
  return await client.fetch(`*[_type == "event" && eventDateTime > now()] | order(eventDateTime asc) [0...${limit}]{
    _id,
    title,
    image{
      asset->{
        url
      }
    },
    eventDateTime,
    location,
    category->{
      title,
      slug
    },
    price,
    maxParticipants,
    description,
    whatToBring,
    hostName,
    hostBio,
    hostAvatar
  }`);
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
    _id,
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

export async function getHostEventCTA() {
  return await client.fetch(`*[_type == "cta" && pageId == "host-event"][0]{
    _id,
    title,
    subtitle,
    buttonText
  }`);
}

export async function getJoinCommunityCTA() {
  return await client.fetch(`*[_type == "cta" && pageId == "join-community"][0]{
    _id,
    title,
    subtitle,
    buttonText
  }`);
}

export async function getHowItWorks() {
  return await client.fetch(`*[_type == "howItWorks"] | order(order asc){
    _id,
    title,
    description,
    order,
    icon{
      asset->{
        url
      }
    }
  }`);
}
