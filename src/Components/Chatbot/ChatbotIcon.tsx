import React from 'react';
import { BsRobot } from 'react-icons/bs'; // Hoặc icon khác bạn muốn

export const ChatbotIcons: React.FC = () => {
  return (
    <div className="bg-green-600 p-1.5 rounded-full shrink-0 text-white">
      <BsRobot size={32} />
    </div>
  );
};
