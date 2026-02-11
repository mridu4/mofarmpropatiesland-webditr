import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { companyInfo } from '@/data/properties';
import Link from 'next/link';

export default function HowToBuyPage() {
  const steps = [
    { num: '01', title: 'Browse Our Properties', desc: 'Explore our available plots online or contact us for personalized recommendations based on your budget and preferences.', icon: '🔍' },
    { num: '02', title: 'Book a Site Visit', desc: 'Schedule a free site visit. We provide transport to any of our project locations so you can see the land firsthand.', icon: '🚗' },
    { num: '03', title: 'Choose Your Plot', desc: 'Select your preferred plot. Our team will explain all details including pricing, payment options, and documentation.', icon: '📋' },
    { num: '04', title: 'Pay Deposit & Sign Agreement', desc: 'Secure your plot with a deposit and sign the sale agreement. We accept M-Pesa, bank transfer, and cheques.', icon: '✍️' },
    { num: '05', title: 'Complete Payments', desc: 'Pay the remaining balance either in full (cash price) or through our flexible 6-month installment plan.', icon: '💰' },
    { num: '06', title: 'Receive Your Title Deed', desc: 'Once fully paid, we process your title deed transfer. You become the official owner of your land!', icon: '🏆' },
  ];

  return (
    <>
      <Header />
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">How to <span className="text-accent">Buy</span></h1>
          <p className="text-white/70 text-lg">Simple steps to owning your dream land</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-bold text-sm">STEP {step.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-charcoal mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-cream p-8 rounded-2xl">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6 text-center">Payment Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-2">💵 Cash Payment</h3>
                <p className="text-gray-600 mb-2">Pay the full amount upfront and enjoy our discounted cash price.</p>
                <p className="text-accent font-semibold">Save up to 15% on plot price!</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-2">📅 Installment Plan</h3>
                <p className="text-gray-600 mb-2">Pay a deposit and complete the balance over 6 months.</p>
                <p className="text-accent font-semibold">Flexible & affordable!</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Contact us today and take the first step towards land ownership!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/properties" className="btn btn-accent">View Properties</Link>
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
