import React from 'react';

function Card({ project }) {
  return (
    <div className="w-[600px] h-[350px] rounded overflow-hidden shadow-lg m-4 flex flex-col bg-[#181715] p-2">
      <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="px-6 py-4">
        <div className="font-poppins text-3xl text-1 mb-2">{project.title}</div>
        <p className="text-1/50 text-base font-poppins">{project.description}</p>
      </div>
    </div>
  );
}

export default Card;
