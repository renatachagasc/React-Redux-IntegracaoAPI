import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import React from 'react'

const UserFormFunc = props => {
    return (
        <form>
            <div>
                <label>
                    Nome
            </label>
                <Field
                    type="text"
                    component="input"
                    name="name"
                    placeholder="Nome" />
            </div>
            <div>
                <label>
                    Email
            </label>
                <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email" />
            </div>
            <div>
                <button type="submit">
                    Adicionar
                </button>
            </div>
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm)