import React from "react";

interface TaskCardProps {
    title: string;
    frequency: string;
    handleDoneButtonClick: () => void;
}

export function TaskCard({title, frequency, handleDoneButtonClick}: TaskCardProps): JSX.Element {
    return <div className='border border-white bg-black/10 text-white p-8 w-[300px]'>
        <div className="flex flex-wrap justify-between mb-8">
            <div className='text-xl text-ellipsis'>{ title }</div>
            <div className="text-white/40 font-semibold">{ frequency }</div>
        </div>
        <div className="text-center">
            <button className='rounded px-6 py-3 bg-black/80 font-bold' onClick={handleDoneButtonClick}>DONE</button>
        </div>
    </div>
}
