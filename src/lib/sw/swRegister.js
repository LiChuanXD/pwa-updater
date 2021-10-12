const onUpdate = registration => {
    const event = new CustomEvent("updateServiceWorker", {
        detail: {
            waiting: true,
            registration
        }
    });
    document.dispatchEvent(event);
};

const onSuccess = () => console.log("SERVICE WORKER UPDATED");

const swRegister = { onUpdate, onSuccess }

export default swRegister;