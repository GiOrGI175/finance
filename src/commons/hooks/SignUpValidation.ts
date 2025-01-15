import * as Yup from 'yup';


export const signUpSchema = Yup.object().shape({
    fullName: Yup.string().required("Fullname is required"),
    email:Yup.string().required().email("Wrong Email"),
    password:Yup.string().required().min(6,"Min 6 chars").max(20,"Max 20 chars")
})

export type signUpFormData = Yup.InferType <typeof signUpSchema>