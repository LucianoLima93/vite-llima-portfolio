import "i18next";

import en from './public/locales/en/translation.json';
import ptBR from './public/locales/pt-BR/translation.json';

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en;
      'pt-BR': typeof ptBR;
    };
    // other
  }
}