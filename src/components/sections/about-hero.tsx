import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="section-padding container">
      <div className="flex w-fit items-center rounded-full border p-1 text-xs">
        <span className="bg-muted rounded-full px-3 py-1">Open Source</span>
        <span className="px-3">AGPL-3.0 Licensed — self-host with full control</span>
      </div>

      <h1 className="my-5 text-5xl leading-none tracking-tight lg:text-7xl">
        Built for logistics teams.
        <br className="hidden sm:block" />
        Backed by open source.
      </h1>

      <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
        Fleetbase is an open-source logistics and operations platform built for teams of every size — from solo couriers to enterprise fleets managing thousands of drivers. We believe logistics software should be modular, self-hostable, and developer-friendly. That means no vendor lock-in, no forced cloud dependency, and no black-box algorithms.
        <br />
        <br />
        Whether you&apos;re running last-mile delivery, managing a freight network, or building a custom logistics product on top of our APIs, Fleetbase gives you the full stack: dispatch, driver tracking, route optimisation, storefronts, finance, and an Extensions Marketplace to build anything else you need. Open source at the core. Enterprise-ready at scale.
      </p>

      <Image
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/about-hero_e9edfd1f.webp"
        alt="Fleetbase — open-source logistics platform team"
        width={1920}
        height={1280}
        priority
        className="mt-16 aspect-video object-cover object-top"
      />
    </section>
  );
}
