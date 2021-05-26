import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";


export default function CustomSelectInput({ ...props }: any) {
  const [field, meta, helpers] = useField(props)
  const label = field.name.charAt(0).toUpperCase() + field.name.slice(1);
  return (
    <FormField error={meta.touched && !!meta.error} >
      <label>{label}</label>
      <Select clearable
        value={field.value || null}
        onChange={(evt, dta) => helpers.setValue(dta.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props} />

      {meta.touched && !!meta.error
        ? <Label content={meta.error} basic pointing color='red' />
        : null}

    </FormField>
  )
}