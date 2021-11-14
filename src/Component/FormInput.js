import Input from '../UI/Input'

const FormInput = ({word, setWord}) => {

    return (
        <div className='form-input'>
            <h2>{word?word:"Enter a Word"}</h2>
            <Input placeholder="Search..." value={word} onChange={e=>setWord(e.target.value)} />
        </div>
    )
}

export default FormInput
