import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, X, Info } from 'lucide-react';
import videosData from '../data/videos.json';

interface Video {
  id: string;
  filename: string;
  src: string;
  title: string;
  category: string;
  duration: string;
}

const VideoGallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const categories = ['All', 'Social Media', 'Campaigns', 'Editing', 'Branding', 'Production'];

  const filteredVideos = useMemo(() => {
    return (videosData as Video[]).filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="section-title">Video Portfolio</h2>
          <p className="text-gray-500 mt-4">Selected works in content creation and editing.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 no-print">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search videos..."
              className="pl-12 pr-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white/50 backdrop-blur-sm w-full sm:w-64 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden aspect-video shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              {/* Sleek Placeholder (shown before hover) */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-[#1a1a1a]">
                <div className="text-center opacity-20 group-hover:opacity-0 transition-opacity duration-300">
                  <Play size={48} fill="currentColor" className="mx-auto mb-2" />
                  <span className="text-xs font-mono uppercase tracking-widest">Preview available</span>
                </div>
              </div>

              {/* Video Preview / Placeholder - Loads metadata only to show the first frame */}
              <video
                src={`${video.src}#t=0.1`}
                preload="metadata"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                muted
                onMouseOver={(e) => {
                  const v = e.target as HTMLVideoElement;
                  v.play().catch(() => {}); 
                }}
                onMouseOut={(e) => {
                  const v = e.target as HTMLVideoElement;
                  v.pause();
                  v.currentTime = 0.1;
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-3 md:p-6">
                <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest mb-1">{video.category}</span>
                <h3 className="text-sm md:text-lg text-white font-medium leading-tight">{video.title}</h3>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                    <Play size={20} className="md:w-8 md:h-8" fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="mb-4 flex justify-center">
             <Info size={48} className="text-gray-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-600">No videos found</h3>
          <p className="text-gray-400 mt-2">
            {searchTerm || selectedCategory !== 'All' 
              ? "Try adjusting your filters or search term."
              : "Start by adding videos to the 'public/videos' folder."}
          </p>
        </div>
      )}

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-16 bg-black/95 backdrop-blur-xl no-print"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>
            
            <div className="w-full max-w-3xl space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src={activeVideo.src}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              </div>
              
              <div className="flex justify-between items-start text-white">
                <div>
                  <span className="text-accent text-sm font-bold tracking-widest uppercase">{activeVideo.category}</span>
                  <h2 className="text-2xl font-serif mt-1">{activeVideo.title}</h2>
                </div>
                <div className="text-white/40 text-sm font-mono mt-2">
                  ID: {activeVideo.id} • {activeVideo.filename}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGallery;
