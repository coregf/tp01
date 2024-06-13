import './App.css'
import FormInput from './FormInput'

function App() {
  const inputs = [
    { label: 'Nombre', id: 'firstName', type: 'text', name: 'firstName' },
    { label: 'Apellido', id: 'lastName', type: 'text', name: 'lastName' },
    { label: 'Email', id: 'email', type: 'email', name: 'email' },
    { label: 'Teléfono', id: 'phone', type: 'tel', name: 'phone' },
    { label: 'Password', id: 'password', type: 'password', name: 'password' },
    { label: 'Confirmar Password', id: 'confirmPassword', type: 'password', name: 'confirmPassword' },
  ];

  return (
    <>
      <h1>Formulario de registro</h1>
      <div className="card">
      <form>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            label={input.label}
            id={input.id}
            type={input.type}
            name={input.name}
          />
        ))}
        <button type="submit">Registrar</button>
      </form>
      </div>

    </>
  )
}

export default App
