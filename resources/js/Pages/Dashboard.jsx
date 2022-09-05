import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import {TaskCard} from '@/Components/TaskCard';

const dummyTaskList = [
    {
        title: '短い名前のタスク',
        frequency: '∞ 1/h',
        handleDoneButtonClick: () => console.log('clicked done!'),
    },
    {
        title: '長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーい名前のタスク',
        frequency: '∞ 1/h',
        handleDoneButtonClick: () => console.log('clicked done!'),
    },
    {
        title: '短い名前のタスク',
        frequency: '∞ 1/h',
        handleDoneButtonClick: () => console.log('clicked done!'),
    },
];

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gradient-to-r from-green-800 via-green-700 to-green-800">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        dummyTaskList.map((task, index) => {
                            return <TaskCard {...task}  key={index} />
                        })
                    }
                </div>
            </div>
        </Authenticated>
    );
}
