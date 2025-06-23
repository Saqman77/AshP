import './Contact.scss'
// import FB from '../../assets/freedi/Facebook.png'
// import INSTA from '../../assets/freedi/insta.png'
// import X from '../../assets/freedi/X.png'
// import LINK from '../../assets/freedi/linked.png'
// import TREE from '../../assets/freedi/linktree-logo-icon.svg'
import Schedule from '../../components/schedule/Schedule'
import Email from '../../components/email/Email'
import ContactHero from '../../components/contact/contactHero/ContactHero'
import backg from '../../assets/contact/backg.svg'
// import { useThemeContext } from '../../utils/ThemeContextProvider'
// import { useEffect } from 'react'

const Contact = () => {

      // const {isActive,removeClass} = useThemeContext();
      
      
      // useEffect(()=>{
      //   if(isActive){
      //     removeClass();
      //     document.documentElement.classList.remove('active')
      //     document.body.classList.remove('active')
      //   }
      // },[])
    
  return (
    <div className="c-wrapper">
      <div className="backgear">
        <img src={backg} alt="" />
      </div>
      <ContactHero/>
    </div>
  )
}

export default Contact