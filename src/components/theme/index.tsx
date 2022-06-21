import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header'
import { SideBarItem } from '../SideBarItem';
import profile from '../../images/profile.svg'
import book from '../../images/book.svg'
import email from '../../images/mail.svg'
import { useForm } from '../../contexts/FormContext'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
 
    const {state} = useForm();
 
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem
                            title="Perfil"
                            description="Vamos se conhecer"
                            icon={profile}
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SideBarItem
                            title="Profissional"
                            description="Sobre sua carreira"
                            icon={book}
                            path="/step/2"
                            active={state.currentStep === 2}
                        />

                        <SideBarItem
                            title="Contato"
                            description="Meios de contato"
                            icon={email}
                            path="/step/3"
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}