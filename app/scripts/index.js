import '../styles/main.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faCommentDots, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

library.add(faCommentDots, faEllipsisH)
dom.watch()
if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
