let valores=[8,2,4,3,1,2,0]
valores.sort()
for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
