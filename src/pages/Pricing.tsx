import PricingCardFramerComponent from '../framer/pricing-card.jsx'
import { bg } from '../lib/shared'

export default function Pricing() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Our <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>Pricing</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>Transparent pricing built around your growth stage. No surprises, just results.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <PricingCardFramerComponent.Responsive b5eyKaM99="The Data Blindness Cure" EfCYbB_OA="from 65,000 KES" sYAYXetgp="/ month" HpiC_WaC8="Best for Startups" EMqJvTei7="One Off Setup Fee: 65,000 (one-off)" vhWLKlxXi="Basic Maintenance & Basic Data Insight" bqjc8yctm="1 Automated Dashboard (Up to 5 KPIs)" QepAVp6IX="Quarterly Analysis Report" dVb1HSXj9={false} idGUHsI9M="40px" />
            <PricingCardFramerComponent.Responsive b5eyKaM99="The Cash Bleed Intervention" EfCYbB_OA="from 110,000 KES" sYAYXetgp="/ month" HpiC_WaC8="For Agencies & SME's" EMqJvTei7="One Off Integration Setup Fee: KES 110,000 (one-off)" vhWLKlxXi="Comprehensive Maintenance & Integrated Data Insight" bqjc8yctm="3 Interactive Dashboard (Up to 10 KPIs)" QepAVp6IX="Quarterly Analysis Report" LJZqx3XhD="Support with Link Tracking" BIXxMvMXC="Automated AI Google Sheets for Internal Reporting" dVb1HSXj9={true} idGUHsI9M="40px" />
            <PricingCardFramerComponent.Responsive b5eyKaM99="The Operations Precision System" EfCYbB_OA="from 220,000 KES" sYAYXetgp="/ month" HpiC_WaC8="For Large Teams" EMqJvTei7="One Off Integration Setup Fee: KES 220,000 (one-off)" vhWLKlxXi="Comprehensive Maintenance & Integrated Data Insight" bqjc8yctm="5 Interactive Automated Dashboard (Up to 5 KPIs)" QepAVp6IX="Monthly Analysis Report" LJZqx3XhD="Support with Link Tracking" BIXxMvMXC="Automated AI Google Sheets for Internal Reporting" dVb1HSXj9={true} idGUHsI9M="40px" />
          </div>
        </div>
      </section>
    </div>
  )
}
