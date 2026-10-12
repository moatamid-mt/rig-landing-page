import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
   <section className="w-full mx-auto py-20 flex flex-col items-center">
  {/* Title */}
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-800 mb-10 text-center tracking-tight">
  Ready to take Rig for a spin?
</h2>

  {/* Cards Container */}
  <div className="w-full bg-white border-y border-neutral-200/80 p-2 sm:p-4 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80 shadow-sm">
    
    {/* Card 1: Schedule a call */}
    <div className="p-6 sm:p-10 flex flex-col justify-between items-start space-y-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 mb-3">
          Schedule a call
        </h3>
        <p className="text-neutral-500 text-base sm:text-lg">
          We are gladly helping companies to get started.
        </p>
      </div>
      
      <button className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base">
        Schedule a Call
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>

    {/* Card 2: Try it out yourself */}
    <div className="p-6 sm:p-10 flex flex-col justify-between items-start space-y-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">
          Try it out yourself
        </h3>
        <p className="text-neutral-500 text-base sm:text-lg">
          We have made it as easy as possible to try Rig.
        </p>
      </div>

      <button className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base">
        Documentation
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>

  </div>
</section>
  );
}