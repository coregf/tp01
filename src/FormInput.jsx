import './App.css'

function FormInput({ label, id, type, name, value }) {

  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
      />
    </div>
  )
}

export default FormInput
