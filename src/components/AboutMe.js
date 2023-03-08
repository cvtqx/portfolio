import React, {useState} from 'react'
import './AboutMe.css'

const AboutMe = () => {
    
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        setIsClicked(!isClicked)
    }

   

  return (
    <>
      <div onClick={clickHandler}>About me</div>
      <div>
        {isClicked && (
          
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Olga Yudkin, software engineer</h5>
                <img src="https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg" alt="cat" style={{width:"150px"}}/>
                <p class="card-text">
                  Here goes a story about why and how I decided to change careers
                </p>
              </div>             
            </div>
          
        )}
      </div>
    </>
  );
}

export default AboutMe