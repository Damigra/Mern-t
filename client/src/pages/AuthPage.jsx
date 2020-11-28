import React from 'react'
import { useHttp } from './../hooks/http.hook';


export default function AuthPage() {
    const { loading, request } = useHttp()


    const [form, setForm] = React.useState({
        email: '', password: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'Post', { ...form })
            console.log('Data', data)
        } catch (e) { }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сохрани ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                    </div>
                    <div style={{ margin: 30 }} >
                        <div className="input-field">
                            <input
                                placeholder="Введите email"
                                id="email"
                                type="text"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label forHtml="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Введите пароль"
                                id="password"
                                type="password"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label forHtml="password">Пароль</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{ marginRight: 20 }}
                            disabled={loading}>
                            Войти
                             </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}>
                            Регестрицая
                             </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
