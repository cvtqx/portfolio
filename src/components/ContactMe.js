import React, {useState} from 'react'

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
              
                <form>Form to submit email will be here</form>
        
              
            )}
          </div>
        </>
      );
}

export default ContactMe