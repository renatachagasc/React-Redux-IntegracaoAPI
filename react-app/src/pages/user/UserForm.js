import { reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux';
import React from 'react'
import { submitUserAction } from '../../actions/user/UserActions'

const UserFormFunc = props => {
    const { handleSubmit } = props

    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <div>
                <label>
                    Nome
            </label>
                <Field
                    type="text"
                    component="input"
                    name="nome"
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

export default connect(mapStateToProps, {submitUserAction})(UserForm)