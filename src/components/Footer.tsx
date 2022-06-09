import {Constants} from '../Constants'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <p>
        <a href={Constants.repositoryLink}>About</a> | © {year} <a href={Constants.authorLink}>{Constants.author}</a>
    </p>
  )
}

export default Footer
