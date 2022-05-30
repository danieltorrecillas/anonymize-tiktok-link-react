import {rest} from 'msw'
import {Constants} from '../Constants'

const handlers = [
  rest.get(Constants.apiUrl, (req, res, ctx) => {
    const searchUrl = req.url.searchParams.get('url')
    if (searchUrl === 'https://www.tiktok.com/garbage') {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Could not find a video for that link. Please double check and try again.',
        })
      )
    }

    const url = Constants.testAnonymizedUrl
    return res(
      ctx.json({
        url,
      })
    )
  }),
]

export {handlers}
