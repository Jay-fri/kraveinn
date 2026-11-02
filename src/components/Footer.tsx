import footerLogo from '../assets/kraveinn-footer-logo.svg'

const Icon = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
const TikTok = () => <Icon><path d="M14 4c.8 2.3 2.3 3.8 4.8 4.1v3.1c-1.8.1-3.4-.5-4.8-1.5v5.6a5.2 5.2 0 1 1-5.2-5.2c.4 0 .8 0 1.2.1v3.2a2.2 2.2 0 1 0 1 1.8V4h3Z" fill="currentColor" stroke="none" /></Icon>
const Instagram = () => <Icon><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></Icon>
const Mail = () => <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
const WhatsApp = () => <Icon><path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.2-4A8 8 0 1 1 20 11.7Z" /><path d="M9 8.2c.3-.7.5-.7.8-.7h.6c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5 0 .6l-.5.6c-.1.2-.2.3 0 .6.5.9 1.3 1.6 2.2 2.1.3.2.5.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.2.4.5 0 .7-.4 1.4-1 1.6-.5.2-1.2.3-2-.1-1-.4-2.5-1.5-3.5-3.3-.8-1.4-1-2.5-1-3.1 0-.4.1-.7.2-1Z" fill="currentColor" stroke="none" /></Icon>

export default function Footer() {
  return <footer>
    <div className="footer-brand"><img className="shared-footer-logo" src={footerLogo} alt="KraveInn" /><p>Good food, tasty treats, and refreshing drinks to<br />always satisfy your cravings.</p><div className="socials"><a href="#" aria-label="TikTok"><TikTok /></a><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="Email"><Mail /></a><a href="#" aria-label="WhatsApp"><WhatsApp /></a></div></div>
    <div className="footer-links"><div><h3>Links</h3><a href="#">Home</a><a href="#">Our Menu</a><a href="#">Orders</a><a href="#">Track Order</a></div><div><h3>Support</h3><a href="#">Contact Us</a><a href="#">FAQs</a><a href="#">Delivery Info</a><a href="#">Help</a></div></div>
    <div className="legal"><h3>Legal</h3><div><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Refund Policy</a></div></div>
    <div className="copyright">©2026 KraveInn. All rights reserved.</div>
  </footer>
}
