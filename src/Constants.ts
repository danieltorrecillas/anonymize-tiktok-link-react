export const Constants = {
  apiUrl: (process.env.REACT_APP_STAGE === 'production' ? process.env.REACT_APP_API_URL_PRD! : process.env.REACT_APP_API_URL_DEV!),
  apiQueryString: '?url=',
  trackingUrl: 'https://www.tiktok.com/t/ZTdtTNRjr/?k=1',
  anonymizedUrl: 'https://www.tiktok.com/@thetalkingbook/video/7053083465318878511',
  author: 'Daniel Torrecillas',
  repositoryLink: 'https://github.com/danieltorrecillas/anonymize-tiktok-link-react'
} as const
