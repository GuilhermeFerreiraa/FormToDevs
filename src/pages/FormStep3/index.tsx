import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

   useEffect(() => {
        if(state.name === ''){
            history('/')
        }
        else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, []);

    const handleNextStep = () => {
       if(state.email !== '' && state.github !== ''){
           console.log(state)
           history('/finished')
       }
       else{
            toast.error("Dados não preenchidos!")
       }
    }

    const handlePreviousStep = () => {
        history('/step/2')
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <C.Container>
            <Theme>
            <Toaster reverseOrder={false} position="top-right" />
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te encontramos?</h1>
                <p>Preencha os campos abaixo para entrarmos em contato!</p>
                <hr />

                <label>
                    Digite seu E-mail:
                    <input 
                    required 
                    type="email" 
                    value={state.email}
                    placeholder='exemplo@exemplo.com'
                    onChange={handleEmailChange} />
                </label>

                <label>
                    Digite seu GitHub:
                    <input 
                    placeholder='https://github.com/exemplo'
                    required 
                    type="url" 
                    value={state.github}
                    onChange={handleGithubChange} 
                    />


                    <C.AreaButton>
                        <button onClick={handlePreviousStep}>Retornar Etapa</button>
                        <button onClick={handleNextStep}>Finalizar Cadastro</button>
                    </C.AreaButton>
                </label>
            </Theme>
        </C.Container>
    )
}