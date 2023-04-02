import { useState } from "react";

const useFormInput = (type) => {
    const [value, setValue] = useState('');

    const handlerChange = (e) => {
        if (type === 'checkbox') {
            setValue(e.target.checked);
        } else {
            setValue(e.target.value);
        }
    }

    return {
        value: value,
        onChange: handlerChange
    }
}

export default useFormInput;