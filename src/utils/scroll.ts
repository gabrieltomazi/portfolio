import { gsap } from 'gsap';


export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault(); 

  gsap.to(window, {
    duration: 1.2,      
    scrollTo: {
      y: targetId,      
      autoKill: true,   
    },
    ease: "power3.inOut", 
  });
};