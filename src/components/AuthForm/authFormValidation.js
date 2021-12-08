import * as yup from 'yup'
import { passwordRegex } from '../../regex'

export const authValidationSchema = yup.object().shape({
  login: yup.string().required('Обязательно для заполнения'),
  subLogin: yup.string(),
  password: yup
    .string()
    .required('Обязательно для заполнения')
    .test(
      'password',
      'Неккоректный пароль',
      (value) => value && value.match(passwordRegex)
    ),
})
