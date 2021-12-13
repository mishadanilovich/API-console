import { call, put } from 'redux-saga/effects'
import api from '../../../../helpers'
import { authenticateFailure, authenticateSuccess } from '../../../actions'
import { AuthenticateParams } from '../types'

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    })
  } catch ({ id }) {
    if (id === 'error/auth/failed') {
      yield call(logoutSaga)
    }
  }
}

export function* authenticateSaga({ payload }: AuthenticateParams) {
  yield api.sendsay
    .login({
      login: payload.login,
      subLogin: payload.subLogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`
    })
    .catch((err: Error) => {
      document.cookie = ''
      console.log('err', err)
    })

  yield put(
    authenticateSuccess({
      sessionKey: api.sendsay.session,
      login: payload.login,
      subLogin: payload.subLogin,
    })
  )
}

export function* logoutSaga() {
  yield put(authenticateFailure())
  document.cookie = ''
}
