import { useRouter } from 'next/router'
import dictionary from './dictionary'

export const useTranslation = () => {
  const router = useRouter();
  const locales = router?.locales || [];
  const defaultLocale = router?.defaultLocale || 'ar';
  const nextRouter = router;
  const locale = locales.includes(nextRouter.locale || '')
    ? nextRouter.locale
    : defaultLocale;

  const translateOrTerm = (term) => {
    const translation = dictionary[locale][term];
    return Boolean(translation) ? translation : term;
  }

  return {
    translate: (term, param = null, translateParam = true) => {
      let toBeReturned = translateOrTerm(term);
      if(param) {
        let toBeReplaced = translateParam ? translateOrTerm(param) : param;
        toBeReturned = toBeReturned.replace('{0}', toBeReplaced);
      }
      return toBeReturned;
    }
  }
}
