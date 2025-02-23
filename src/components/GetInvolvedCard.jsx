import React from 'react';

export const GetInvolvedCard = ({ icon, title, description }) => (
    <div className="card bg-white/10 rounded-lg p-6 backdrop-blur-lg cursor-pointer">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <h4 className="font-medium font-ocr tracking-tight">{title}</h4>
        </div>
        <p className="text-sm">{description}</p>
    </div>
);