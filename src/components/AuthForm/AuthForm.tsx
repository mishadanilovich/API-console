import React, { useContext, useState } from 'react'
import { Formik } from 'formik'
import { Notification, StyledInput, Button } from '../../components'

import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import {
  LOGIN,
  LOGIN_LABEL,
  PASSWORD_LABEL,
  SUB_LOGIN_LABEL,
} from '../../constants'
import { AuthContext } from '../../hoc'

export const AuthForm: React.FC = () => {
  const [isSubmittingError] = useState(false)
  const [isLoading] = useState(false)

  const { setIsAuth } = useContext(AuthContext)

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
        onSubmit={(values: Values): void => {
          console.log(values, 'Values')
          setIsAuth(true)
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledInput
              id="login"
              name="login"
              textLabel={LOGIN_LABEL}
              isError={!!errors.login && !!touched.login}
            />
            <StyledInput
              id="subLogin"
              name="subLogin"
              textLabel={SUB_LOGIN_LABEL}
              isError={!!errors.subLogin && !!touched.subLogin}
              isOptional
            />
            <StyledInput
              id="password"
              name="password"
              textLabel={PASSWORD_LABEL}
              type="password"
              isError={!!errors.password && !!touched.password}
            />

            <Button
              type="submit"
              className="button-submit"
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={isLoading}
            >
              {LOGIN}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
