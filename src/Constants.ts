export const Constants = {
  apiUrl: (process.env.REACT_APP_STAGE === 'production' ? 'https://3rce4mrp90.execute-api.us-east-1.amazonaws.com/prd/convert' : 'https://3rce4mrp90.execute-api.us-east-1.amazonaws.com/dev/convert'),
  apiQueryString: '?url=',
  trackingUrl: 'https://vm.tiktok.com/TTPdMcXEWw',
  anonymizedUrl: 'https://m.tiktok.com/v/7022710108492696837',
  author: 'Daniel Torrecillas',
  repositoryLink: 'https://github.com/danieltorrecillas/anonymize-tiktok-link-react'
} as const
