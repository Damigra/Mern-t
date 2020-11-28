import React from 'react'

export default function AuthPage() {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сохрани ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                    </div>
                    <div   style={{ margin: 30 }} >
                        <div className="input-field">
                            <input
                                placeholder="Введите email"
                                id="email"
                                type="text"
                                className="yellow-input"
                            />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Введите пароль"
                                id="password"
                                type="password"
                                className="yellow-input"
                            />
                            <label for="password">Пароль</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{ marginRight: 20 }}>Войти</button>
                        <button className="btn grey lighten-1 black-text">Регестрицая</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
