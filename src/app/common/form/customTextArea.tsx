import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";


export default function CustomTextArea({ ...props }: any) {
  const [field, meta] = useField(props)
  const label = field.name.charAt(0).toUpperCase() + field.name.slice(1);
  return (
    <FormField error={meta.touched && !!meta.error} >
      <label>{label}</label>
      <textarea {...field} {...props} />

      {meta.touched && !!meta.error
        ? <Label content={meta.error} basic pointing color='red' />
        : null}

    </FormField>
  )
}