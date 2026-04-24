import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ForSMBs from '@/components/ForSMBs';
import ForFreelancers from '@/components/ForFreelancers';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ForSMBs />
        <ForFreelancers />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
