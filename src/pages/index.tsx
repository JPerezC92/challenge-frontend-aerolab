import type { NextPage } from 'next';
import Head from 'next/head';

import { AuthenticationProvider } from 'src/modules/authentication/context/AuthenticationProvider';
import { ProductsSection } from 'src/modules/products/containers/ProductsSection';
import { Hero } from 'src/modules/shared/components/Hero';
import { NavBar } from 'src/modules/shared/components/NavBar';
import { SEO } from 'src/modules/shared/components/SEO';
import { Walkthrough } from 'src/modules/shared/components/Walkthrough';

const Home: NextPage = () => {
  return (
    <AuthenticationProvider>
      <div>
        <SEO
          title="Aerolab challenge"
          siteTitle="Loyalty program"
          description="Here you can exchange your acumulated points for awesome products"
        />

        <NavBar />

        <Hero />

        <Walkthrough />

        <ProductsSection />
      </div>
    </AuthenticationProvider>
  );
};

export default Home;
