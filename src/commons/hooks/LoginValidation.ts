import * as Yup from 'yup';


export interface LoginFormData {
  email: string;
  password: string;
}


export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
}).required();