import * as Yup from 'yup'


export let userSchema = Yup.object({
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    email: Yup.string().email('Please enter a valid email address').required('Please enter a valid email address'),
    radio:Yup.boolean().required('Please select a query type'),
    message:Yup.string().required('This field is required'),
    checkbox:Yup.boolean().oneOf([true],'To submit this form,please consent to being contacted')
  });
  