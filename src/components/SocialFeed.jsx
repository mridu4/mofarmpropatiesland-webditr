'use client';
import { useState } from 'react';
import { companyInfo } from '@/data/properties';

export default function SocialFeed() {
  const [activeTab, setActiveTab] = useState('tiktok');

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Follow Us on <span className="text-primary">Social Media</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            See our latest property updates, site visits, and happy customers
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'tiktok' ? 'bg-charcoal text-white shadow-lg' : 'bg-white text-charcoal hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              TikTok
            </button>
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white text-charcoal hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              </svg>
              Instagram
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className={`w-20 h-20 ${activeTab === 'tiktok' ? 'bg-charcoal' : 'bg-gradient-to-br from-purple-500 to-pink-500'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {activeTab === 'tiktok' ? (
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  ) : (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {activeTab === 'tiktok' ? 'Watch Our Property Tours' : 'See Our Property Gallery'}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === 'tiktok' ? 'See our latest site visits on TikTok' : 'Beautiful property photos on Instagram'}
              </p>
              <a 
                href={activeTab === 'tiktok' ? companyInfo.social.tiktok : companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${activeTab === 'tiktok' ? 'btn-primary' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'}`}
              >
                View on {activeTab === 'tiktok' ? 'TikTok' : 'Instagram'} →
              </a>
            </div>
          </div>
        </div>

        {/* Social Stats - FIXED: Facebook says "Followers" */}
        <div className="grid grid-cols-3 gap-4">
          <a href={companyInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all group">
            <svg className="w-8 h-8 mx-auto mb-2 text-charcoal group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <div className="text-2xl font-bold text-accent">11.7K</div>
            <div className="text-gray-500 text-sm">TikTok Followers</div>
          </a>
          <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all group">
            <svg className="w-8 h-8 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
            <div className="text-2xl font-bold text-accent">13K</div>
            <div className="text-gray-500 text-sm">Facebook Followers</div>
          </a>
          <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all group">
            <svg className="w-8 h-8 mx-auto mb-2 text-pink-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
            <div className="text-2xl font-bold text-accent">140+</div>
            <div className="text-gray-500 text-sm">Instagram Followers</div>
          </a>
        </div>
      </div>
    </section>
  );
}
