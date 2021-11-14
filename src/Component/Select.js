import Select from '../UI/Select'
import Data from '../Data/Data'


const Selected = ({category,setCategory,setWord}) => {

    function handleChange(language){
        setCategory(language)
        setWord("")
    }

    return (
        <div className='form-selected'>
            <Select value={category} handleChange={handleChange} defaultValue="Choose Language" options={Data}/>
        </div>
    )
}

export default Selected
