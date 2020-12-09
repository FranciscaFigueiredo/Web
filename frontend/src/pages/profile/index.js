import React from 'react';
import './style.css'

export default function Profile(){


    return (

        <div id = "profile-container">

            <h1> Cadastro </h1>
            <form>
                <strong>Nome</strong>
                <input name = "name"/>
                <strong>Email</strong>
                <input type = "email" name = "email"/>
                <strong>Idade</strong>
                <input name = "idade"/>
                <strong>Empresa</strong>
                <input name = "empresa"/>

                <div className = "actions">
                    <button className = "button" type = "submite"> Salvar </button>
                    <button className = "button" type = "submite"> Voltar </button>
                </div>
                

            </form>

        </div>


    );

}