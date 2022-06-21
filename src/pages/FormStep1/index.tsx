import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const FormStep1 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);
    
    const handleNextStep = () => {
        if (state.name != '') {
            history('/step/2')
        }
        else {
            toast.error("Dados não preenchidos!")
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <C.Container>
            <Theme>
                <Toaster reverseOrder={false} position="top-right" />
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label>
                    Seu nome completo:
                    <input required autoFocus type="text" value={state.name}
                        onChange={handleNameChange} />

                    <button onClick={handleNextStep}>Próxima Etapa</button>
                </label>
            </Theme>
        </C.Container>
    )
}

