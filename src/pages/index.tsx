import type { NextPage } from 'next';
import Head from 'next/head';
import { AuthenticationProvider } from 'src/modules/authentication/context/AuthenticationProvider';

import { ProductsSection } from 'src/modules/products/containers/ProductsSection';
import { Container } from 'src/modules/shared/components/Container';
import { NavBar } from 'src/modules/shared/components/NavBar';

const Home: NextPage = () => {
  return (
    <AuthenticationProvider>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/icons/favicon.svg" />
        </Head>

        <NavBar />

        {/* <Hero /> */}

        <Container>
          <ProductsSection />
        </Container>
      </div>
    </AuthenticationProvider>
  );
};

export default Home;
