import {FormControl as ChakraFormControl, FormControlProps, FormLabel as ChakraFormLabel, FormLabelProps, Input, InputProps} from '@chakra-ui/core'

export const FormControl = (props: FormControlProps) => (
    <ChakraFormControl marginBottom={5} {...props}>
        {props.children}
    </ChakraFormControl>
)

export const FormInput = (props: InputProps) => (
    <Input border={`1px`}
           borderColor={`#2D2D2D`}
           borderRadius={`4px`}
           width={`100%`}
           {...props}
    />
)

export const FormLabel = (props: FormLabelProps) => (
    <ChakraFormLabel fontSize={[`18px`, `18px`, `20px`, `20px`]} {...props}>
        {props.children}
    </ChakraFormLabel>
)
