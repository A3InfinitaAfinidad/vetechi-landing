import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/es/', '/en/', '/es/privacy/', '/en/privacy/'].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
