'use client';
import { useState } from 'react';
import { formatPrice, companyInfo } from '@/data/properties';

export default function PropertyCard({ property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = property.images || ['/images/placeholder.jpg'];
  
  const colorClasses = {
    burgundy: 'bg-primary',
    orange: 'bg-accent',
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mofarm! I'm interested in ${property.name} at ${formatPrice(property.cashPrice)} cash price. Please send me more details.`
  );

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="card group">
      {/* Image Gallery */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${property.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.preventDefault(); setCurrentImageIndex(index); }}
                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-20">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
        
        {/* Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1.5 ${colorClasses[property.color] || 'bg-primary'} text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg z-20`}>
          {property.badge}
        </span>

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="text-white">
            <span className="text-sm opacity-80">Cash Price</span>
            <div className="text-2xl font-display font-bold">{formatPrice(property.cashPrice)}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {property.location}, {property.county}
        </div>

        <h3 className="font-display font-semibold text-xl text-charcoal mb-3 group-hover:text-primary transition-colors">
          {property.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(property.features || []).slice(0, 3).map((feature, i) => (
            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4">
          <div className="text-center">
            <div className="text-[10px] text-gray-400 uppercase">Size</div>
            <div className="font-semibold text-sm text-charcoal">{property.size}</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-[10px] text-gray-400 uppercase">Deposit</div>
            <div className="font-semibold text-sm text-charcoal">{(property.deposit / 1000)}K</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-gray-400 uppercase">Period</div>
            <div className="font-semibold text-sm text-charcoal">{property.duration}</div>
          </div>
        </div>

        {/* Installment Price */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-xs text-gray-400">Installment Price</div>
            <div className="text-lg font-semibold text-accent">{formatPrice(property.installmentPrice)}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp flex-1 text-sm py-2.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Inquire
          </a>
          <a href={`tel:${companyInfo.phone}`} className="btn btn-outline flex-1 text-sm py-2.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
