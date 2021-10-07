// import { useState } from 'react';

const initState = {
    waiting: false,
    registration: null
};

export const updateState = payload => {
    initState.waiting = true;
    initState.registration = payload
};

const PwaUpdater = ({ popup }) => {
    console.log("success");
    console.log(initState);
    console.log(popup);

    return (
        <div>
            <h1>PWA Updater</h1>
        </div>
    );
};

export default PwaUpdater;