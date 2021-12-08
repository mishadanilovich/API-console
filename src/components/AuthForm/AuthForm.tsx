import React, { useState } from 'react'
import { Formik } from 'formik'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'

import { Values } from './types'
import { authValidationSchema } from './authFormValidation'

import { AuthContainer, StyledForm } from './styles'
import { Notification } from '../Notification'

export const AuthForm: React.FC = () => {
  const [isSubmittingError] = useState(false)

  return (
    <AuthContainer>
      <h1>API-консолька</h1>
      {isSubmittingError && (
        <Notification
          type="error"
          header="Ошибка"
          description="Описание ошибки"
        />
      )}
      <Formik
        initialValues={{
          login: '',
          subLogin: '',
          password: '',
        }}
        validationSchema={authValidationSchema}
        onSubmit={(values: Values): void => console.log(values)}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledInput
              id="login"
              name="login"
              textLabel="Логин"
              isError={!!errors.login && !!touched.login}
            />
            <StyledInput
              id="subLogin"
              name="subLogin"
              textLabel="Сублогин"
              isError={!!errors.subLogin && !!touched.subLogin}
              isOptional
            />
            <StyledInput
              id="password"
              name="password"
              textLabel="Пароль"
              type="password"
              isError={!!errors.password && !!touched.password}
            />

            <Button
              type="submit"
              className="button"
              disabled={!(Object.keys(errors).length === 0)}
            >
              Войти
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
