import type { Metadata } from 'next';
import { Headphones, MapPin, Bell, FileCheck, BarChart3, MessageSquare } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Customer Support Tools for Logistics | Fleetbase',
  description:
    'Give customer success teams real-time order visibility, live tracking links, and instant proof of delivery — so they can resolve customer queries in seconds, not hours.',
  keywords: ['customer support logistics software', 'delivery tracking for support teams', 'order visibility customer service', 'proof of delivery customer support'],
  openGraph: {
    title: 'Customer Support Tools for Logistics | Fleetbase',
    description: 'Real-time order visibility and live tracking links for customer success teams.',
  },
};

export default function CustomerSuccessPage() {
  return (
    <SolutionPageLayout
      badge="For Customer Success Teams"
      title={<>Answer Every Customer Query <span className="text-gradient">In Seconds, Not Hours.</span></>}
      description="Customer success teams are only as good as the information they have access to. Fleetbase gives support agents real-time order visibility, live tracking links, instant proof of delivery, and the context to resolve any delivery query immediately."
      stats={[
        { value: '70%', label: 'Reduction in delivery-related support tickets' },
        { value: '90 sec', label: 'Average query resolution time' },
        { value: '4.8★', label: 'Average customer satisfaction score' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-orders-table.webp"
      heroScreenshotAlt="Fleetbase FleetOps order detail view for customer success teams showing full order timeline and driver status"
      heroScreenshotNeeded="FleetOps order detail view — full order timeline, customer info, driver position, and POD visible to support agent"
      painPoints={{
        heading: 'Why delivery support is so painful without the right tools',
        items: [
          'Support agents have no visibility into where a delivery is right now',
          'Customers calling to ask "where is my order?" with no answer available',
          'Proof of delivery disputes taking days to resolve',
          'Agents having to call drivers or operations to get basic status updates',
          'No record of what happened during a delivery for escalation cases',
          'Customer satisfaction dropping because support cannot give accurate ETAs',
        ],
      }}
      features={[
        {
          title: 'Real-Time Order Visibility for Support Agents',
          description:
            'Every support agent sees the same live order data as the operations team — current driver position, order status, ETA, and full event history. Answer "where is my order?" instantly without escalating.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps order detail — support agent view showing live driver position, ETA, and order status timeline',
        },
        {
          title: 'Shareable Live Tracking Links',
          description:
            'Generate and share a live tracking link for any order in seconds. Send it to the customer via SMS, email, or chat. They see the driver\'s real-time position and ETA without needing to call back.',
          icon: MessageSquare,
          screenshotNeeded: 'FleetOps order detail — "Share tracking link" button with SMS/email send options',
        },
        {
          title: 'Instant Proof of Delivery Access',
          description:
            'Every completed delivery has a timestamped, geotagged proof of delivery — signature, photo, and recipient name — accessible instantly from the order record. Resolve disputes in seconds with irrefutable evidence.',
          icon: FileCheck,
          screenshotNeeded: 'FleetOps order detail — POD section showing signature image, delivery photo, and GPS coordinates',
        },
        {
          title: 'Complete Order Event History',
          description:
            'Every event in an order\'s lifecycle is logged — created, assigned, picked up, en route, delivered, or failed — with timestamps and context. Support agents have the full story without asking anyone.',
          icon: Bell,
          screenshotNeeded: 'FleetOps order timeline — full event log with timestamps, driver actions, and status changes',
        },
        {
          title: 'Proactive Customer Notifications',
          description:
            'Reduce inbound support volume by automatically notifying customers at every delivery milestone. Fewer customers call because they already know where their order is.',
          icon: Headphones,
          screenshotNeeded: 'FleetOps notification settings — customer notification triggers with SMS/push/email options',
        },
        {
          title: 'Support Performance Analytics',
          description:
            'Track delivery-related support ticket volume, resolution time, and customer satisfaction scores. Identify which order types or zones generate the most support contacts and address root causes.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps support analytics — ticket volume by order type, resolution time trend, and CSAT score',
        },
      ]}
      testimonial={{
        quote:
          "Our delivery-related support tickets dropped 70% after we started sending customers live tracking links automatically. The ones that do come in are resolved in under two minutes.",
        author: 'Jasmine K.',
        role: 'Head of Customer Experience',
        company: 'Bloom Delivery',
      }}
      faqs={[
        {
          q: 'Can support agents access order details without an operations login?',
          a: 'Yes. Role-based access controls allow you to create support agent roles with read-only access to order details, tracking, and proof of delivery — without giving access to dispatch or configuration.',
        },
        {
          q: 'How quickly can a support agent pull up a specific order?',
          a: 'Orders can be searched by order number, customer name, phone number, or tracking ID. A full order record including live tracking and POD is accessible in seconds.',
        },
        {
          q: 'Can support agents resend tracking links to customers?',
          a: 'Yes. Support agents can generate and resend tracking links for any active order directly from the order detail view.',
        },
        {
          q: 'What happens if a customer disputes a delivery?',
          a: 'The order record contains timestamped proof of delivery including signature, photo, and GPS coordinates. This evidence is immediately accessible and can be shared with the customer to resolve disputes.',
        },
        {
          q: 'Can Fleetbase integrate with our CRM or helpdesk tool?',
          a: 'Yes. Fleetbase integrates with CRM and helpdesk platforms via REST API and webhooks. Order status updates can be pushed to your support tool automatically, giving agents context without switching systems.',
        },
      ]}
      ctaHeading="Give your support team the answers they need"
      ctaBody="Real-time order visibility, instant POD access, and proactive customer notifications — reduce support volume and resolve queries faster with Fleetbase."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
