import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import HouseRules from '@/components/HouseRules';
import CorfuRecommendations from '@/components/CorfuRecommendations';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { getContent } from '@/lib/content';

export async function getStaticProps() {
  return {
    props: {
      site: getContent('site.md'),
      hero: getContent('hero.md'),
      about: getContent('about.md'),
      gallery: getContent('gallery.md'),
      houseRules: getContent('house-rules.md'),
      corfu: getContent('corfu.md'),
      faq: getContent('faq.md'),
    },
  };
}

export default function Home({ site, hero, about, gallery, houseRules, corfu, faq }) {
  return (
    <>
      <Head>
        <title>{site.metaTitle}</title>
        <meta name="description" content={site.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={site.ogTitle} />
        <meta property="og:description" content={site.ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation site={site} />

      <main>
        <Hero hero={hero} site={site} />
        <About about={about} />
        <Gallery gallery={gallery} />
        <HouseRules houseRules={houseRules} />
        <CorfuRecommendations corfu={corfu} />
        <FAQ faq={faq} site={site} />
      </main>

      <Footer site={site} />
    </>
  );
}
