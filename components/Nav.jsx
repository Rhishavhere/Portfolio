'use client'
export default function Nav(){
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <div className=" absolute w-screen top-20 flex justify-center gap-48
      text-[#0e0e0e] font-bebas text-md tracking-widest cursor-pointer z-[999]">
      <a onClick={() => handleScroll('projects')} data-cursor-tool>PROJECTS</a>
      <a onClick={() => handleScroll('services')} data-cursor-tool>SERVICES</a>
      <a onClick={() => handleScroll('info')} data-cursor-tool>WHO AM I?</a>
      <a onClick={() => handleScroll('skills')} data-cursor-tool>SKILLS</a>
      <a onClick={() => handleScroll('connect')} data-cursor-tool>CONNECT</a>
    </div>
  )
}