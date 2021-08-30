import { Link } from 'react-router-dom'
import { firebaseApp } from '../api/firebase'
import { LoginForm, AuthTemplate } from '../components'
export function SignUp () {
  const onSubmit = (email, password) => {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  }

  return (
    <AuthTemplate link={<Link to='login'>У Вас есть аккаунт? Войдите</Link>}>
      <LoginForm
        title='Регистрация'
        submitButton='Зарегистрироваться'
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  )
}
