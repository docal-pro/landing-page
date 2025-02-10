import React from 'react';

export const InfoCard = ({ icon, title, description }) => (
    <div className="card bg-black bg-opacity-50 rounded-xl p-6 cursor-pointer transition-all duration-300">
        <div className="flex items-center mb-4">
            <div className="w-18 h-18 bg-transparent rounded-full flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-semibold ml-4 text-green-400 transition-colors duration-300 font-ocr">{title}</h3>
        </div>
        <p className="text-gray-300 transition-colors duration-300">{description}</p>
    </div>
);