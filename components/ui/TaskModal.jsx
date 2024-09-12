import { useState } from 'react';

function TaskModal({ tasks, isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center model-bg-modal">
      <div className="bg-primary p-6 rounded-lg  w-[80%]">
        <h2 className="text-3xl font-bold mb-7">Tous les taches</h2>
        <ul className="list-disc list-item">
         
            <li className="mb-2 flex">
              {tasks}  
            </li>
        
        </ul>
        <button onClick={onClose} className="mt-4 hover:bg-accent/80 bg-accent text-white px-4 py-2 rounded-lg">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
