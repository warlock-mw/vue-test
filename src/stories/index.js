import { storiesOf } from '@storybook/vue'

import AppHeader from '../components/AppHeader'

storiesOf('AddHeader', module)
  .add('simple', () => ({
    components: { AppHeader },
    template: `<MyButton>KEEP IT SIMPLE</MyButton>`
  }))
