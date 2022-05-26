export const Constants = {
  apiUrl: (process.env.REACT_APP_STAGE === 'production' ? 'https://3rce4mrp90.execute-api.us-east-1.amazonaws.com/prd/convert' : 'https://3rce4mrp90.execute-api.us-east-1.amazonaws.com/dev/convert'),
  apiQueryString: '?url=',
  trackingUrl: 'https://www.tiktok.com/t/ZTdtTNRjr/?k=1',
  anonymizedUrl: 'https://www.tiktok.com/@thetalkingbook/video/7053083465318878511',
  author: 'Daniel Torrecillas',
  repositoryLink: 'https://github.com/danieltorrecillas/anonymize-tiktok-link-react'
} as const
