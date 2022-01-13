import {Constants} from './Constants'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <p>
      © {year} {Constants.author} <a href={Constants.repositoryLink}>About</a>
    </p>
  )
}

export default Footer
