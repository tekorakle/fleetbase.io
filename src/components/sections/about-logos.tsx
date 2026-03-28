import Image from 'next/image';

const logos = [
  {
    name: 'Forbes',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/forbes_ba08816c.svg',
    width: 162,
    height: 42,
  },
  {
    name: 'TechCrunch',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/tc_0932530a.svg',
    width: 84,
    height: 42,
  },
  {
    name: 'The Guardian',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/the-guardian_b263cce7.svg',
    width: 127,
    height: 48,
  },
  {
    name: 'Aave',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/aave_12a5cb98.svg',
    width: 130,
    height: 37,
  },
  {
    name: 'AE Studio',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/ae-studio_c52b1b16.svg',
    width: 156,
    height: 37,
  },
];

export default function AboutLogos() {
  return (
    <section className="section-padding container !pt-0 text-center">
      <p className="text-muted-foreground tracking-normal">
        Trusted by logistics teams in 30+ countries worldwide
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-13">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="opacity-70 invert dark:invert-0"
          />
        ))}
      </div>
    </section>
  );
}
