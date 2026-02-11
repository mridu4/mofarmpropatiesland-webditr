import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { companyInfo } from '@/data/properties';

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Contact <span className="text-accent">Us</span></h1>
          <p className="text-white/70 text-lg">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '📞', title: 'Call Us', content: companyInfo.phone, link: `tel:${companyInfo.phone}`, action: 'Call Now' },
              { icon: '💬', title: 'WhatsApp', content: 'Chat with us 24/7', link: `https://wa.me/${companyInfo.whatsapp}`, action: 'Start Chat' },
              { icon: '✉️', title: 'Email', content: companyInfo.email, link: `mailto:${companyInfo.email}`, action: 'Send Email' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <a href={item.link} target={item.title === 'WhatsApp' ? '_blank' : '_self'} className="btn btn-accent w-full">{item.action}</a>
              </div>
            ))}
          </div>

          <div className="bg-cream p-8 rounded-2xl mb-16">
            <h2 className="section-title mb-8 text-center">Visit Our <span className="text-primary">Office</span></h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img src="/images/office.jpg" alt="Mofarm Office" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">Main Office Building</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img src="/images/office_2.jpg" alt="Mofarm Office Interior" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">Customer Service Area</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-4">📍 Address</h3>
                <p className="text-gray-600 mb-4">{companyInfo.address}</p>
                <a 
                  href="https://maps.google.com/?q=Viken+Thirty+Industrial+Park+Outer+Ring+Road+Nairobi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Get Directions
                </a>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-4">🕐 Office Hours</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex justify-between"><span>Monday - Friday</span><span className="font-medium">8:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="font-medium">9:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="font-medium">By Appointment</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent p-8 rounded-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Book a Free Site Visit</h2>
            <p className="text-white/90 mb-6">We provide free transport to any of our project sites. Contact us to schedule your visit!</p>
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Mofarm! I would like to book a free site visit to see your properties.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-accent hover:bg-gray-100"
            >
              Book Site Visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
