import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero({ className, ...props }: HeroProps) {
  return (
    <section className={cn('relative', className, {})} {...props}>
      <div className="blue-overlay">
        <Image
          src={`https://s3-alpha-sig.figma.com/img/5cdd/fbd0/44f2660a20dd6837ff31aefdfff9cc7c?Expires=1692576000&Signature=J7QBjHCorAEyJJpKTDyJGdW1uf7ZWKJIhdnmS6zuQduWYGJFnJ3jDy0yD40Zwsq-hu8bz8q2bg-nbPBBgswKmSgLndwhQuyF-dN4p0O9RoiEQ1TpXs4462CE9lRzUZbNk1A4Yh7Mb4WqK29PEy7-9K5Te137U7py6XqfGdbeznXbFYTd4gX6vH6SZXKeWa0Wzx9jHb7NbQ6NI0UMONXY4oj79jFaexTDC5DsbY4ChL7cF34PxBCBryidl1ildplJzFn7t9i9oHdgrwCagV7lkkwb0u9ijsl-y~uJlwsMDbaH3DLTwBwxUiiQP~LJBQW3icIcbICAQN8C6s2IXUJ8sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
          alt=""
          className=" max-h-screen min-h-[500px] w-full object-cover"
          width={1024}
          height={600}
        />
      </div>
      <div className="absolute inset-0 m-auto h-fit w-fit">
        <div className="container max-w-screen-sm space-y-5 text-center md:max-w-screen-md">
          <Typography variant={'heading'}>
            WIJ MAKEN WEBSITES MET PASSIE
          </Typography>
          <Typography variant={'muted'}>
            Blue Waterfall helpt jou met webdesign, webmarketing en zorgt ervoor
            dat jouw ambities online te zien zijn
          </Typography>
          <div className="flex items-center justify-center gap-5 max-md:flex-col">
            <Link href={'/booking'}>
              <Button>Vrijblijvende afspraak &rarr;</Button>
            </Link>
            <Button variant={'link'}>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
