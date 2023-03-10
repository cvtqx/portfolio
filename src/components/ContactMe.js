import React, {useState} from 'react';
import EmailForm from './EmailForm';

const ContactMe = () => {
      const [isClicked, setIsClicked] = useState(false);

      const clickHandler = () => {
        setIsClicked(!isClicked);
      };


      return (
        <>
          <div onClick={clickHandler}>Contact me</div>
          <div>
            {isClicked && (             
                <EmailForm />             
            )}
          </div>
        </>
      );
}

export default ContactMe