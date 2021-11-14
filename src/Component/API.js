
const API = async (word,category) => {
try{
    const data = fetch.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
}catch(error){
    console.log('Error')
}   
}

export default API
