import HeaderFixed from '@/components/blocks/header-fixed/header-fixed';
import HomeCommunity from '@/components/blocks/home-community/home-community';
import HomeFormerTweets from '@/components/blocks/home-former-tweets/home-former-tweets';
import HomeHero from '@/components/blocks/home-hero/home-hero';
import HomeJoinUs from '@/components/blocks/home-join-us/home-join-us';
import HomeRules from '@/components/blocks/home-rules/home-rules';
import HomeTakeStab from '@/components/blocks/home-take-stab/home-take-stab';
import HomeTeam from '@/components/blocks/home-team/home-team';
import HomeThey from '@/components/blocks/home-they/home-they';
import HomeUnkwnHills from '@/components/blocks/home-unkwn-hills/home-unkwn-hills';
import HomeWeb3Revolution from '@/components/blocks/home-web3-revolution/home-web3-revolution';
import Preloader from '@/components/blocks/prealoder/preloader';
import ShutterSwapper from '@/components/blocks/shutter-swapper/shutter-swapper';
import TransitionPixel from '@/components/blocks/transition-pixel/transition-pixel';
import DefaultPageLayout from '@/components/layouts/default-page-layout';

export default function Index() {
  return (
    <DefaultPageLayout title="UNKWN WORLD">
      {/* <HomeSocialsListFixed /> */}
      <HomeHero />
      {/* <HeaderFixed /> */}
      {/* <ShutterSwapper> */}
      {/* <TransitionPixel> */}
      <HomeCommunity />
      <HomeThey />
      {/* </TransitionPixel> */}
      {/* </ShutterSwapper> */}
      <HomeRules />
      {/* <ShutterSwapper> */}
      <HomeWeb3Revolution />
      <HomeJoinUs />
      <HomeUnkwnHills />
      <HomeTakeStab />
      <HomeTeam />
      {/* </ShutterSwapper> */}
      <HomeFormerTweets />
    </DefaultPageLayout>
  );
}
