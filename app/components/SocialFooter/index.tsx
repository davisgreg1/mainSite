import { Linkedin, Github, Facebook } from '@icons-pack/react-simple-icons'
const SocialFooter = () => {
  return (
    <div className='social-footer'>
      <div className='social-footer-item'>
        <a
          href={'https://www.linkedin.com/in/gregdavisdeveloper/'}
          target='_blank'
        >
          <Linkedin />
        </a>
      </div>
      <div className='social-footer-item'>
        <a href={'https://github.com/davisgreg1'} target='_blank'>
          <Github />
        </a>
      </div>
      <div className='social-footer-item'>
        <a href={'https://www.facebook.com/moneycaptainapp'} target='_blank'>
          <Facebook />
        </a>
      </div>
    </div>
  )
}

export default SocialFooter
