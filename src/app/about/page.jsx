import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { companyInfo } from '@/data/properties';

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-accent">Mofarm</span></h1>
          <p className="text-white/70 text-lg">Kenya's trusted land company since 2018</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Mofarm Lands & Properties Ltd was founded with a simple mission: to make land ownership accessible to every Kenyan. We believe that owning land should not be a privilege reserved for the wealthy, but a realistic goal for hardworking families across the country.
            </p>
            <p className="text-gray-600 mb-6">
              Since our establishment, we have helped hundreds of families secure their piece of Kenya's beautiful highlands. From the fertile valleys of Subukia to the scenic slopes near Mt. Kenya, our properties offer the perfect blend of affordability, accessibility, and growth potential.
            </p>

            <h2 className="font-display text-3xl font-bold text-charcoal mb-6 mt-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Transparency', desc: 'Clear pricing with no hidden charges. What you see is what you pay.' },
                { title: 'Integrity', desc: 'All our properties come with verified, genuine title deeds.' },
                { title: 'Accessibility', desc: 'Flexible payment plans make land ownership achievable for everyone.' },
                { title: 'Support', desc: '24/7 customer support to guide you through every step.' },
              ].map((v, i) => (
                <div key={i} className="bg-cream p-6 rounded-xl">
                  <h3 className="font-semibold text-xl text-primary mb-2">{v.title}</h3>
                  <p className="text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl font-bold text-charcoal mb-6 mt-12">Contact Us</h2>
            <p className="text-gray-600">
              Ready to start your land ownership journey? Contact us today!
            </p>
            <div className="mt-6">
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
