import React, { FC } from 'react';


interface CloseButtonProps {
  targetId: string
}

const CloseButton: FC<CloseButtonProps> = ({targetId}) => (
  <button 
    className='absolute top-0 right-0 h-fit text-start m-1 px-2 font-bold'
    onClick={() => toggleTarget(targetId)}
    type='button'  
  >X</button>
);

function toggleTarget(targetId: string) {
  const targetElement = document.getElementById(targetId)!;

  if (targetElement.classList.contains("hidden")) {
    targetElement.classList.remove("hidden");
  } else {
    targetElement.classList.add("hidden");
  }
}

export default CloseButton;
