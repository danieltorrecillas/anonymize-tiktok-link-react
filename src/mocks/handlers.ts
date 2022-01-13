import {rest} from 'msw'
import {Constants} from '../Constants'

const handlers = [
  rest.get(Constants.apiUrl, (req, res, ctx) => {
    const url = Constants.anonymizedUrl
    return res(
      ctx.json({
        url,
      })
    )
  })
]

export {handlers}
