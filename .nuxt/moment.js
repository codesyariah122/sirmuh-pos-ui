import moment from 'moment'

import 'moment/locale/id'

import 'moment-timezone'

moment.tz.setDefault('Asias/Jakarta')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
