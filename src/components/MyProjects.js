import React, {useState} from 'react';
import './MyProjects.css';
import ProjectList from './ProjectList';

const MyProjects = () => {

      const [isClicked, setIsClicked] = useState(false);

      const clickHandler = () => {
        setIsClicked(!isClicked);
      };

     

      return (
        <>
          <div onClick={clickHandler}>My Projects</div>
          <div>
            {isClicked && (
                <ProjectList />             
            )}
          </div>
        </>
      );
}

export default MyProjects;