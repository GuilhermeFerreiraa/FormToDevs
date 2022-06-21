import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import img from '../../images/people.png';

export const FormFinished = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history('/')
        }
        else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, []);
    
    return (
        <C.Container>
            <C.AreaImage>
                <C.BoxInfo>
                    <h1>Cadastro concluído {state.name}! Em breve iremos entrar em contato</h1>
                    <p>Por isso é importante que fique atento ao seu e-mail, e as suas próximas ligações, hein! Até a próxima e Boa Sorte!</p>
                    <Link className="btnMenu" to={'/'}>Voltar ao Menu</Link>
                </C.BoxInfo>
                <img src={img} />
            </C.AreaImage>
        </C.Container>
    )
}