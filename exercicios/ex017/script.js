function tabuada(){
    let num= document.getElementById("inum")  //pegando o numero informado
    let res= document.getElementById("itabuada") //pegando aonde vai aparecer
    if (num.value.length==0){
        window.alert("Por favor, digite um número!")
    }else{
        res.innerHTML= "" //para ele apagar sempre que solicitar novamente
        for(let c=1;c<=10;c++){
            let item = document.createElement("option")
            item.text = `${num.value} x ${c} = ${num.value*c}`
            item.value= `res${c}` //criando option 1,2,3...
            res.appendChild(item)
        }
    }
}



