export default function (element:HTMLElement, binding:any) {
    console.log(element)
    if(binding.value.type=='email'){
        if(!binding.value.val.includes('@')){
            element.style.border = "2px solid red" 
            console.log('is red')
        }
        else{
            element.style.border = ""
        }
    }

  }
  
  