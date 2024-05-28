import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white border-b border-blue-500' : 'text-[#ADB7BE] border-b';

  return (
    <button onClick={selectTab} className="mr-3 font-semibold hover:text-white">
      <p className={buttonClasses}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
