import { updateState } from "../components/PwaUpdater";

const onUpdate = reg => updateState(reg);
const onSuccess = () => console.log("SERVICE WORKER UPDATE SUCCESS");

const swRegister = { onUpdate, onSuccess };

export default swRegister;