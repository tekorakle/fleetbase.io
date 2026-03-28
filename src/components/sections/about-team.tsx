import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const teamMembers = [
  {
    name: 'Ronald A. Richardson',
    role: 'Co-Founder & CEO',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/1_592c2778.webp',
  },
  {
    name: 'Abayomi Ogundipe',
    role: 'Co-Founder & CTO',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/2_b99d3145.webp',
  },
  {
    name: 'Muhammed Mukhtar',
    role: 'Head of Engineering',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/3_0007f055.webp',
  },
  {
    name: 'Femi Akindele',
    role: 'Lead Product Designer',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/4_2c2e515b.webp',
  },
];

export default function AboutTeam() {
  return (
    <section className="section-padding container max-w-screen-xl">
      <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
        Meet the Fleetbase team
      </h2>
      <p className="text-muted-foreground mt-3 max-w-2xl text-lg leading-snug">
        Fleetbase is built by a passionate team of engineers, designers, and logistics experts committed to making world-class operations software open and accessible to everyone.
      </p>

      <Carousel
        className="mt-10"
        opts={{
          align: 'start',
          loop: false,
        }}
      >
        <CarouselContent className="cursor-grab snap-x snap-mandatory">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="min-w-[289px] basis-1/4 snap-start"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={289}
                height={358}
                className="rounded-lg object-cover"
              />
              <h3 className="text-accent-foreground mt-4 text-2xl font-bold">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
