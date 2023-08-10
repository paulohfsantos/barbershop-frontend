import { pt, en } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import tailwindTheme from './tailwind-theme'

const config: DefaultConfigOptions = {
  locales: { pt, en },
  locale: 'en',
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(tailwindTheme),
  },
}

export default config