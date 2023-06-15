import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

const [LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE] = ['/auth/login', '/auth/registration', '/catalog']

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await registration(email, password)
            } else {
                data = await login(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите ваш password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Form className='d-flex justify-content-between mt-3 '>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={SHOP_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Нет аккаунта? <NavLink to={SHOP_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                        }
                        <Button
                            variant="outline-info"
                            onClick={click}
                        >
                            {isLogin ? "Войти" : "Войти"}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>

    )
})

export default Auth;