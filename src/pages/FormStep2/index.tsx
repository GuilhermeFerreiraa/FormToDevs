import * as C from './styles';

import { Theme } from '../../components/theme'
import { useNavigate } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption'
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';

import experiente from '../../images/experiente.png'
import iniciante from '../../images/iniciante.png'

export const FormStep2 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            history('/')
        }
        else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            history('/step/3')
        }
        else {
            alert("Preencha os Campos! Obrigatórios")
        }
    }

    const handlePreviousStep = () => {
        history('/')
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <C.Container>
            <Theme>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, qual nível te descreve melhor?</h1>
                <p>Selecione o seu tempo de experiência como desenvolvedor:</p>
                <hr />

                <SelectOption
                    title='Sou Iniciante'
                    description="Comecei a programar a menos de 2 anos!"
                    icon={experiente}
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title='Sou Experiente'
                    description="Programo há mais de 2 anos!"
                    icon={iniciante}
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <C.AreaButton>
                    <button onClick={handlePreviousStep}>Retornar Etapa</button>
                    <button onClick={handleNextStep}>Próxima Etapa</button>
                </C.AreaButton>
            </Theme>
        </C.Container>
    )
}