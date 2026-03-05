import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gold font-heading text-lg font-bold">
              Mental Wealth Solutions
            </p>
            <p className="text-cream/30 text-sm mt-1">
              Matthew Sexton, LCSW
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-8 text-cream/30 text-sm">
              <a href="#raves" className="hover:text-gold transition-colors">
                Framework
              </a>
              <a href="#about" className="hover:text-gold transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-gold transition-colors">
                Services
              </a>
              <Link href="/blog" className="hover:text-gold transition-colors">
                Blog
              </Link>
              <a
                href="https://vibecheck.luxury"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Vibe Check ↗
              </a>
            </div>
            <a
              href="https://calendly.com/matthewsextonlcsw-mentalwealthsolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-colors text-sm"
            >
              Book Free Consultation
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-cream/20 text-xs">
          <p>&copy; {year} Mental Wealth Solutions. All rights reserved.</p>
          <p className="mt-1">mentalwealthsolutions.org</p>
        </div>
      </div>
    </footer>
  );
}
