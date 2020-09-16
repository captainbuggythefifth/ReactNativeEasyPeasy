import React, { ReactElement, useState } from 'react';
import Input from 'components/atoms/Input';
import { View } from 'react-native';
import Button from 'components/atoms/Button';

/**
 * componentsLoginFormTestID
 * @exports componentsLoginFormTestID
 */
export const componentsLoginFormTestID = "componentsLoginFormTestID";

/**
 * emailInputPlaceholder
 * @exports emailInputPlaceholder 
 */
export const emailInputPlaceholder = "Your email";

/**
 * passwordInputPlaceholder
 * @exports passwordInputPlaceholder 
 */
export const passwordInputPlaceholder = "Your password";

export interface ILoginFormProps {
    onSubmit: Function
}


/**
 * LoginForm
 * @callback onSubmit
 * @returns ReactElement
 */
const LoginForm = ({onSubmit}: ILoginFormProps): ReactElement => {
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View testID={componentsLoginFormTestID}>
            <Input value={email} onChangeText={(value: string) => setEmail(value)} placeholder={emailInputPlaceholder} />
            <Input value={password} onChangeText={(value: string) => setPassword(value)} placeholder={passwordInputPlaceholder} />
            <Button label={"Submit"} onPress={() => onSubmit({email, password})}/>
        </View>
    )
}

export default LoginForm