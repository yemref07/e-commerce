import { joinURL } from 'ufo';
import type { ProviderGetImage } from '@nuxt/image';

export const getImage: ProviderGetImage = (src) => {
  return {
    url: src, // Directly return the src (full URL from API)
  };
};
