import type { Metadata } from 'next';
import { Navigation, Truck, BarChart3, Zap, MapPin, Clock } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Route Optimization Software | Fleetbase',
  description:
    'Cut fuel costs and improve on-time delivery rates with AI-powered route optimization. Fleetbase optimizes multi-stop routes in real-time, factoring in traffic, time windows, and vehicle capacity.',
  keywords: ['route optimization software', 'delivery route planner', 'multi-stop route optimization', 'fleet route planning', 'dynamic route optimization'],
  openGraph: {
    title: 'Route Optimization Software | Fleetbase',
    description: 'Cut fuel costs and improve on-time rates with AI-powered route optimization.',
  },
};

export default function RouteOptimizationPage() {
  return (
    <SolutionPageLayout
      badge="Use Case — Route Optimization"
      title={<>Stop Wasting Fuel on <span className="text-gradient">Routes That Could Be Better.</span></>}
      description="Fleetbase's route optimization engine calculates the most efficient delivery sequences in seconds — factoring in traffic, time windows, vehicle capacity, and driver availability. The result: fewer miles, lower costs, and more on-time deliveries."
      stats={[
        { value: '30%', label: 'Average fuel cost reduction' },
        { value: '25%', label: 'More stops per driver per day' },
        { value: '15 sec', label: 'Average route calculation time' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshotNeeded="FleetOps route optimization panel — showing before/after route comparison with distance and time savings"
      painPoints={{
        heading: 'What poor routing costs you',
        items: [
          'Drivers backtracking across zones due to unoptimized sequences',
          'Fuel bills rising with no visibility into route efficiency',
          'Time windows missed because routes were planned without traffic data',
          'Dispatchers spending hours manually planning routes every morning',
          'Vehicles running over capacity on some routes, underutilized on others',
          'No way to re-optimize dynamically when conditions change mid-day',
        ],
      }}
      features={[
        {
          title: 'Constraint-Based Route Optimization',
          description:
            'Fleetbase optimizes routes against multiple real-world constraints simultaneously — delivery time windows, vehicle load capacity, driver shift hours, and traffic conditions. Every route is the best possible route given your constraints.',
          icon: Navigation,
          screenshotNeeded: 'FleetOps route optimizer — constraint settings panel showing time windows, capacity, and traffic options',
        },
        {
          title: 'Dynamic Re-Optimization',
          description:
            'When a new order comes in, a driver is delayed, or traffic conditions change, Fleetbase re-optimizes affected routes in real-time. Dispatchers are notified of changes and can approve or override.',
          icon: Zap,
          screenshotNeeded: 'FleetOps live dispatch — dynamic re-optimization alert with updated route suggestion',
        },
        {
          title: 'Multi-Vehicle Load Balancing',
          description:
            'Distribute orders across your available fleet to balance workload, minimize total distance, and ensure no vehicle exceeds capacity. Optimize across your entire fleet simultaneously.',
          icon: Truck,
          screenshotNeeded: 'FleetOps fleet dispatch view — load balancing across multiple vehicles with capacity indicators',
        },
        {
          title: 'Time Window Management',
          description:
            'Set delivery time windows per order and let Fleetbase sequence stops to meet them all. Receive alerts when a time window is at risk and see which orders need priority re-routing.',
          icon: Clock,
          screenshotNeeded: 'FleetOps order list — time window column with at-risk indicators and ETA vs window comparison',
        },
        {
          title: 'Live Route Monitoring',
          description:
            'Track driver progress against the optimized route in real-time. See which stops have been completed, which are next, and where drivers are deviating from the planned route.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps live map — driver on optimized route with completed stops (green), current stop (blue), remaining (grey)',
        },
        {
          title: 'Route Performance Analytics',
          description:
            'Compare planned vs. actual routes to measure optimization effectiveness. Track fuel consumption, on-time rate, and distance per stop over time to continuously improve your routing strategy.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps analytics — planned vs actual route comparison chart with fuel and time variance',
        },
      ]}
      testimonial={{
        quote:
          "We reduced our total fleet mileage by 28% in the first month. The route optimization engine handles what used to take our dispatch team two hours in about 30 seconds.",
        author: 'David L.',
        role: 'Fleet Operations Manager',
        company: 'FastTrack Logistics',
      }}
      faqs={[
        {
          q: 'How does Fleetbase\'s route optimization work?',
          a: 'Fleetbase uses constraint-based optimization algorithms that consider delivery time windows, vehicle capacity, driver hours, and real-time traffic data to calculate the most efficient route sequence for each vehicle.',
        },
        {
          q: 'Can Fleetbase optimize routes across multiple vehicles simultaneously?',
          a: 'Yes. Fleetbase optimizes across your entire available fleet simultaneously, balancing workload and minimizing total distance across all vehicles.',
        },
        {
          q: 'How does dynamic re-optimization work?',
          a: 'When conditions change — a new order arrives, a driver is delayed, or traffic worsens — Fleetbase automatically recalculates affected routes and presents updated suggestions to dispatchers for approval.',
        },
        {
          q: 'Does route optimization account for vehicle type and capacity?',
          a: 'Yes. Each vehicle can have its own capacity, speed profile, and operational constraints. The optimizer assigns orders to vehicles based on compatibility and capacity.',
        },
        {
          q: 'Can drivers deviate from the optimized route?',
          a: 'Yes. Drivers can deviate from the suggested route in the Navigator app. Deviations are tracked and reported in analytics so you can understand where and why drivers are not following optimized routes.',
        },
      ]}
      ctaHeading="Cut fuel costs and deliver more on time"
      ctaBody="Route optimization is one of the highest-ROI investments in logistics. Start your free trial and see how much Fleetbase can save your operation."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
