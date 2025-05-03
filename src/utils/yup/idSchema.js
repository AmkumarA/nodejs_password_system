import Yup from 'yup';
import { customeMessage } from '../customeMessage.js';

const idSchema = Yup.object({
    id: Yup.number()
        .typeError(customeMessage.error.badReq)
        .min(1, customeMessage.error.badReq)
        .required(customeMessage.error.badReq),
});

export { idSchema }