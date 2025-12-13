import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Pin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='border-t border-border bg-secondary/30'>
      <div className='container mx-auto px-4 py-12 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <Building2 className='h-6 w-6 text-primary' />
              <span className='text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                Shivam Engineers and Interior Designers
              </span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Excellence in construction and interior design since
              establishment. Building dreams into reality.
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold text-foreground'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/about-us'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  About-Us
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/portfolio'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold text-foreground'>
              Our Services
            </h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>Consultation</li>
              <li>Planning</li>
              <li>Quality Construction</li>
              <li>Renovation</li>
              <li>Interior Design</li>
            </ul>
          </div>

          <div className='h-full'>
            <h3 className='mb-4 text-sm font-semibold text-foreground'>
              Contact Info
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <Phone className='h-4 w-4 mt-0.5 text-accent' />
                <span>+91 90578 21513</span>
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <Mail className='h-4 w-4 mt-0.5 text-accent' />
                <a href='mailto:shivamengineers2003@gmail.com'>
                  shivamengineers2003@gmail.com
                </a>
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <Pin className='h-7 w-7 mt-0.5 text-accent' />
                <span>
                  Mahima Trinity Mall,Swage Farm,New Sanganer
                  Road,Sodala,Jaipur- 302019
                </span>
              </li>

              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <Facebook className='h-4 w-4 mt-0.5 text-accent' />
                <a href='https://www.facebook.com/profile.php?id=61579971371649'>
                  <span>Shivam Engineers</span>
                </a>
              </li>
   <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <Instagram className='h-4 w-4 mt-0.5 text-accent' />
                <a href='https://www.instagram.com/shivamengineersandinteriors'>
                  <span>@shivamengineersandinteriors</span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-border pt-8 text-center'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Shivam Engineers & Interior Designers.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
