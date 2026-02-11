import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PropertyCard from '@/components/PropertyCard';
import { properties as staticProperties } from '@/data/properties';
import { getPropertiesFromSanity, sanityConfigured } from '@/lib/sanity';

export const revalidate = 60;

export default async function PropertiesPage() {
  let allProperties = staticProperties;
  if (sanityConfigured) {
    const sanityProperties = await getPropertiesFromSanity();
    if (sanityProperties?.length > 0) allProperties = sanityProperties;
  }

  return (
    <>
      <Header />
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-accent">Properties</span></h1>
          <p className="text-white/70 text-lg">Find your perfect plot from our selection of prime land</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property) => (<PropertyCard key={property.id} property={property} />))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
