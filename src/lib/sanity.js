// src/lib/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Check if Sanity is configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const sanityConfigured = Boolean(projectId);

export const sanityClient = sanityConfigured 
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

// Image URL builder
const builder = sanityConfigured ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder || !source) return '/images/placeholder.jpg';
  return builder.image(source);
}

// Fetch all properties from Sanity
export async function getPropertiesFromSanity() {
  if (!sanityClient) return null;

  const query = `*[_type == "property"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    location,
    county,
    size,
    cashPrice,
    installmentPrice,
    deposit,
    duration,
    badge,
    badgeColor,
    description,
    features,
    images
  }`;

  try {
    const properties = await sanityClient.fetch(query);
    
    return properties.map((property) => ({
      id: property.slug?.current || property._id,
      name: property.name,
      location: property.location,
      county: property.county,
      size: property.size || '50 × 100',
      cashPrice: property.cashPrice || 0,
      installmentPrice: property.installmentPrice || 0,
      deposit: property.deposit || 0,
      duration: property.duration || '6 Months',
      badge: property.badge || 'New',
      color: property.badgeColor || 'burgundy',
      description: property.description || '',
      features: property.features || [],
      images: property.images?.map((img) => urlFor(img).width(800).url()) || ['/images/placeholder.jpg'],
    }));
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return null;
  }
}
