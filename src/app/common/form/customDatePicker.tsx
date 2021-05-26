import { useField, useFormikContext } from "formik";
import { FormField, Label } from "semantic-ui-react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function CustomDatePicker({ ...props }: any) {
  const [field, meta] = useField(props)
  const label = field.name.charAt(0).toUpperCase() + field.name.slice(1);
  const { setFieldValue } = useFormikContext();

  return (
    <FormField error={meta.touched && !!meta.error} >
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(event: any) => setFieldValue(field.name, event)}


      />


      {meta.touched && !!meta.error
        ? <Label content={meta.error} basic pointing color='red' />
        : null}

    </FormField>
  )
}