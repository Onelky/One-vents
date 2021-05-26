import { useField } from "formik";
import { FormField, Icon, Input, Label } from "semantic-ui-react";


export default function CustomFormField({ label, ...props }: any) {
  const [field, meta] = useField(props)
  return (

    <FormField error={meta.touched && !!meta.error}  >
      {label && <label>{label}</label>}

      <Input {...field} {...props} />

      {meta.touched && !!meta.error
        ? <p className='error-message'>{meta.error}</p>
        : null}

    </FormField>
  )
}