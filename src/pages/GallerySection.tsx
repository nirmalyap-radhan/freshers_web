import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import type { GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'past', label: 'Past Festas' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'teaser', label: 'Teaser Art' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <ImageIcon className="w-3.5 h-3.5" /> Visual Canvas
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D]">
          Gallery of <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">Memories</span>
        </h2>

        <p className="text-xs md:text-sm text-[#35283A]/70 font-light max-w-lg mx-auto">
          Snapshots of joy, camaraderie, floral decor, and mathematical aesthetics.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-[#432C4D] text-[#FAF8F4] shadow-md scale-105 border border-[#C9A96E]/40'
                : 'bg-[#EEE8F1]/60 text-[#35283A]/80 hover:bg-[#DCD2E3]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative cursor-pointer glass-card rounded-3xl overflow-hidden border border-[#DCD2E3] hover:border-[#6F557D]/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            style={{ animationDelay: `${idx * 70}ms` }}
          >
            {/* Aspect Ratio Container */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#EEE8F1]/50 relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#432C4D]/80 via-[#432C4D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-[#FAF8F4]">
                <div className="self-end p-2 rounded-full bg-[#FAF8F4]/20 backdrop-blur-md">
                  <Maximize2 className="w-4 h-4 text-[#C9A96E]" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#C9A96E] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F4]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#DCD2E3]/90 line-clamp-1 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer Info */}
            <div className="p-3.5 flex items-center justify-between text-xs text-[#432C4D]">
              <span className="font-serif font-semibold">{item.title}</span>
              <span className="text-[10px] text-[#71806B] font-medium">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
