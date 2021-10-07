const onUpdate = reg => console.log("ON UPDATE", reg);
const onSuccess = () => console.log("SERVICE WORKER UPDATE SUCCESS");

const swRegister = { onUpdate, onSuccess };

export default swRegister;