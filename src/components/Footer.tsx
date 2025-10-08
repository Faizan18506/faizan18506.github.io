import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={18} className="text-red-500 animate-pulse" fill="currentColor" />
            <span>by</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              Faizan Javed
            </span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            &copy; 2025 Faizan Javed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
