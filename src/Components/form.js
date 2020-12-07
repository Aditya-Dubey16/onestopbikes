import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row} from 'reactstrap';


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(50)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(5)




const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} /><br/>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


const renderTextarea = ({
  textarea,
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} rows="8"
       cols="35" placeholder={label} type={type} /><br/>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)



class MyForm extends React.Component  {

render(){
  const {handleSubmit,  addComment, bikeId} = this.props

  return (
    <div>
<form onSubmit={handleSubmit}>


<Row className="form-group">
<Col md={12}>
<Field
name="author"
label="Your Name"
component={renderInput}
type="text"
validate={[required, maxLength15, minLength2]} />
</Col>
</Row>


 <Row className="form-group">
 <Col md={12}>
<Field
name="comment"
label="Comments"
component={renderTextarea}
type="text"
validate={[required, maxLength15, minLength2]} />
</Col>
</Row>


<button type="submit">Submit</button>

</form>
</div>

);
}
}

export default reduxForm({
  form: 'myform',

})(MyForm);
