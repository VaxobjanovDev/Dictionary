import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Definition from '../Definition/Definition'
import FormInput from './FormInput'
import Selected from './Select'

const Header = () => {

    const [category,setCategory] = useState('en')
    const [meaning, setMeaning] = useState([])
    const [word, setWord] = useState("")

    const dictionaryApi = async()=>{
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
            setMeaning(response.data)
        }catch(error){
            console.log('error')
        }
    } 
    
    useEffect(()=>{
        dictionaryApi()
    },[word,category])

    console.log(meaning)

    return (
        <div className='container'>
            <FormInput word={word} setWord={setWord}/>
            <Selected category={category} setCategory={setCategory} setWord={setWord}/>
            {meaning && (<Definition word={word} category={category} meaning={meaning} className='my-5'/>)}
        </div>
    )
}

export default Header
