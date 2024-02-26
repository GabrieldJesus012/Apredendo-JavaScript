let num= document.querySelector(`input#inumero`)
let lista= document.querySelector(`select#ilista`)
let res= document.querySelector(`div#ires`)
let valores=[]

function isNumero(n){
    if(Number (n)>=1 && Number(n)<=100){  
        return true
    }else{
        return false
    }
}

function inLista(n,l){ //nao esta na lista
    if (l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        
    }else{
        window.alert(`Valor ${num.value} inválido (não informado ou >100) ou já encontrado na lista`)
    }
}
