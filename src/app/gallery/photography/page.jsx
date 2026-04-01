import Header from '@/components/Header';
import Link from 'next/link';
import Pic from '../../../components/Pic';
import SetNavbarColor from '@/components/SetNavbarColor';

export default function Photography() {
  return (
    <div>
      <Header
        title="Photography"
        description="A collection of wildlife and travel shots."
      />
      <main>

        <div className="py-24 gap-12">
          <p>
            I've been taking photos for a long time. From personal hobbies to
            photography for organizations, I've had a lot of experience with different types of photography.
            I also led photography for <Link href="/work/tmun" className="text-accent hover:underline">TMUN</Link>, where my team and I took over 5700 photos. 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Pic image="/photo/campus.jpg" text='UofT Campus, 2025' />
          <Pic image="/photo/liminal-street.jpg" text='Liminal Street, 2024' />
          <Pic image="/photo/chicago.jpg" text='Chicago, 2023' />
          <Pic image="/photo/campus-in-fog.jpg" text='UofT Campus in Fog, 2025' />
          <Pic image="/photo/paris.png" text='Paris, 2023' />
          <Pic image="/photo/wolf.JPG" text='Coyote, 2023' />
        </div>

        <div className="py-24 gap-12">
          <p>
            Pictures from when I was 7-12 years old. I took a lot of photos of birds and nature, 
            and edited them in Photoshop and Lightroom with my dad. I've been taking photos for a long time,
            and I still enjoy it as a hobby. Honestly, my early photos are probably better than they are now.
            I had more time to go out and wait for good shots.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Pic image="/photo/bay-of-fundy.jpg" text='Bay of Fundy, 2017' />
          <Pic image="/photo/blue-jay-eating-2.jpg" text='Blue Jay with Peanut, 2017' />
          <Pic image="/photo/foggy-lake.jpg" text='Foggy Lake, 2014' />
          <Pic image="/photo/blue-jay-eating.jpg" text='Blue Jay, Peanut, 2017' />
          <Pic image="/photo/blue-jay-young.jpg" text='Young Blue Jay, 2018' />
          <Pic image="/photo/blue-jay.jpg" text='Blue Jay Portrait, 2018' />
          <Pic image="/photo/chickadee.jpg" text='Chickadee, 2018' />
          <Pic image="/photo/lighthouse.jpg" text='Lighthouse, 2018' />
          <Pic image="/photo/wood-duck.jpg" text='Wood Duck, 2018' />
          <Pic image="/photo/woodpecker.jpg" text='Woodpecker, 2019' />
          <div>
            <Pic image="/photo/pei-docks.jpg" text='PEI Docks, 2018' />
            <Pic image="/photo/young-goldfinch.jpg" text='Young Goldfinch, 2018' />
          </div>
          <Pic image="/photo/tree-swallow.jpg" text='Tree Swallow, 2018' />
        </div>
      </main>
    </div>
  );
}
