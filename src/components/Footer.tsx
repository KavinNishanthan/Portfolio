"use client";


export default function Footer() {
  return (
    <footer className='relative z-10 border-t border-border/50 bg-bg-secondary'>
      {/* Gradient line at top */}
      <div className='absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent' />

      <div className='px-6 sm:px-6 lg:px-8 py-2'>
        <div className=''>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-xs text-text-muted'>
              © {new Date().getFullYear()} Kavin Nishanthan P D. All rights
              reserved.
            </p>
            <p className='text-xs text-text-muted flex items-center gap-1.5'>
              Built with
              <span className='text-accent-light font-medium'>Next.js</span>
              <span className='text-text-muted'>•</span>
              <span className='text-accent-light font-medium'>
                Tailwind CSS
              </span>
              <span className='text-text-muted'>•</span>
              <span className='text-accent-light font-medium'>
                Framer Motion
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
