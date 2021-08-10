import {useState} from "react"

function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue)
    const [valid, setValid] = useState(false)

    function handleChange(e){

        let nameRe = /^[a-zA-Z ]*$/
        let numberRe = /^[0-9 \- ]*$/

        if(e.target.name === 'Name' || e.target.name === 'Surname'){
            if(e.target.value.length > 0 && !nameRe.test(e.target.value )){
                e.target.parentNode.classList.add('error')
                setValid(false)
            }else{
                e.target.parentNode.classList.remove('error')
                setValid(true)
            }
        }

        if(e.target.name === 'Phone'){
            if(e.target.value.length > 0 && !numberRe.test(e.target.value)){
                e.target.parentNode.classList.add('error')
                setValid(false)
            }else{
                e.target.parentNode.classList.remove('error')
                setValid(true)
            }
        }

        setValue(e.target.value)
    }

    return{
        value,
        valid,
        onChange: handleChange
    }
}

export default useFormInput