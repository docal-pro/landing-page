import React from 'react';

export const ApproachCard = ({ icon, title, description }) => (
    <div className="card space-y-4 p-4 rounded-lg cursor-pointer">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <h4 className="text-lg font-medium text-green-300 font-ocr tracking-tight">{title}</h4>
        </div>
        <p className="text-gray-200">{description}</p>
    </div>
);