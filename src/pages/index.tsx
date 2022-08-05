import type { NextPage } from 'next';

import { AuthenticationProvider } from 'src/modules/authentication/context/AuthenticationProvider';
import { ProductsSection } from 'src/modules/products/containers/ProductsSection';
import { FooterSection } from 'src/modules/shared/components/FooterSection';
import { Hero } from 'src/modules/shared/components/Hero';
import { NavBar } from 'src/modules/shared/components/NavBar';
import { SEO } from 'src/modules/shared/components/SEO';
import { Walkthrough } from 'src/modules/shared/components/Walkthrough';

const Home: NextPage = () => {
  return (
    <AuthenticationProvider>
      <SEO
        title="Aerolab challenge"
        siteTitle="Loyalty program"
        description="Here you can exchange your acumulated points for awesome products"
      />

      <NavBar />

      <Hero />

      <Walkthrough />

      <ProductsSection />

      <FooterSection />
    </AuthenticationProvider>
  );
};

export default Home;
