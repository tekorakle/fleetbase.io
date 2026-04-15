/**
 * JSON-LD structured data components for SEO.
 * These inject machine-readable schema.org markup that Google uses for rich results.
 */

export function OrganizationSchema() {
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Fleetbase',
 url: 'https://fleetbase.io',
 logo: 'https://fleetbase.io/images/filled-icon.png',
 sameAs: [
 'https://github.com/fleetbase/fleetbase',
 'https://twitter.com/fleetbase_io',
 'https://www.linkedin.com/company/fleetbase',
 'https://discord.com/invite/HnTqQ6zAVn',
 ],
 contactPoint: [
 {
 '@type': 'ContactPoint',
 email: 'hello@fleetbase.io',
 contactType: 'sales',
 },
 {
 '@type': 'ContactPoint',
 email: 'support@fleetbase.io',
 contactType: 'customer support',
 },
 ],
 address: {
 '@type': 'PostalAddress',
 addressCountry: 'SG',
 addressLocality: 'Singapore',
 },
 foundingDate: '2021',
 founders: [
 { '@type': 'Person', name: 'Shiv Thakker' },
 { '@type': 'Person', name: 'Ronald Richardson' },
 ],
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

export function SoftwareApplicationSchema() {
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'SoftwareApplication',
 name: 'Fleetbase',
 applicationCategory: 'BusinessApplication',
 operatingSystem: 'Web, Android',
 url: 'https://fleetbase.io',
 description:
 'Open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud, no per-seat pricing.',
 offers: {
 '@type': 'Offer',
 price: '50',
 priceCurrency: 'USD',
 priceSpecification: {
 '@type': 'UnitPriceSpecification',
 price: '50',
 priceCurrency: 'USD',
 unitText: 'MONTH',
 },
 },
 aggregateRating: {
 '@type': 'AggregateRating',
 ratingValue: '4.8',
 reviewCount: '120',
 },
 author: {
 '@type': 'Organization',
 name: 'Fleetbase',
 url: 'https://fleetbase.io',
 },
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqs.map((faq) => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer,
 },
 })),
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: items.map((item, index) => ({
 '@type': 'ListItem',
 position: index + 1,
 name: item.name,
 item: item.url,
 })),
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

export function ProductSchema({
 name,
 description,
 price,
 url,
}: {
 name: string;
 description: string;
 price?: string;
 url: string;
}) {
 const schema: Record<string, unknown> = {
 '@context': 'https://schema.org',
 '@type': 'Product',
 name,
 description,
 url,
 brand: {
 '@type': 'Brand',
 name: 'Fleetbase',
 },
 };
 if (price) {
 schema.offers = {
 '@type': 'Offer',
 price,
 priceCurrency: 'USD',
 availability: 'https://schema.org/InStock',
 };
 }
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}
