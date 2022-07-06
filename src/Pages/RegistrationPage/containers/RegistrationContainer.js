import React, { useState } from 'react'
import validator from 'validator';

import styles from "../components/RegistrationView/styles.module.scss"


export default function RegistrationContainer (){
    const [reg, setReg] = useState(() => {
        return {
            username: "",
            email: "",
            password1: "",
            password2: "",
        }
    })

    const changeInputReg = event => {
        event.persist() //позволяет получить доступ к событиям ассинхронным способом
        setReg(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitCheck = event => {
        event.preventDefault();
        if(!validator.isEmail(reg.email)) {
            alert("Введите ваш email")
        } else if(reg.password1 !== reg.password2) {
            alert("Введен неверный пароль.")
        } else if(!validator.isStrongPassword(reg.password1, {minSymbols: 0})) {
            alert("Пароль должен состоять из одной строчной буквы, прописных букв и цифр, и должен содержать не менее 8 символов.")
        } else if ( localStorage.getItem(reg.email) === null){
                let list = [reg.username, reg.password1];
                localStorage.setItem(reg.email,JSON.stringify(list) )
        } else {
                alert("Пользователь с таким адресом электронной почты уже существует")
        }
    }




    return (
        <div  className={styles.form}>
            <h2>Регистрация</h2>
            <form onSubmit={submitCheck}>
                <div>
                    <input
                        placeholder={"Имя"}
                        type="username"
                        id="username"
                        name="username"
                        value={reg.username}
                        onChange={changeInputReg}
                    />
                </div>
                <div>
                    <input
                        placeholder={"email"}
                        type="email"
                        id="email"
                        name="email"
                        value={reg.email}
                        onChange={changeInputReg}
                        formNoValidate
                    />
                </div>
                <div>
                    <input
                        placeholder={"Пароль"}
                        type="password"
                        id="password1"
                        name="password1"
                        value={reg.password1}
                        onChange={changeInputReg}
                    />
                </div>
                <div>
                    <input
                        placeholder={"Повторите пароль"}
                        type="password"
                        id="password2"
                        name="password2"
                        value={reg.password2}
                        onChange={changeInputReg}
                    />
                </div>


                <button type="submit">Зарегистрироваться</button>


            </form>
        </div>
    )


}
