function Meuscop(){
    const formulario= document.querySelector(".form")
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        const nomeD= e.target.querySelector("#name")
        const snomeD= e.target.querySelector("#sname")
        const alcunhaD= e.target.querySelector("#alcunha")
        const idadeD= e.target.querySelector("#idade")
        const classeD= e.target.querySelector("#classe")
        const escolhaD= e.target.querySelector("#escolha")
        const historyD= e.target.querySelector("#history")

        const pessoa ={nome: nomeD.value,sobrenome: snomeD.value,alcunha:alcunhaD.value, idade: idadeD.value, classe: classeD.value, escolha:escolhaD.value, desceição:historyD.value }
        const msg1= `${pessoa.alcunha}- O ${pessoa.classe}`
        const msg2=`${pessoa.nome} da familia ${pessoa.sobrenome}`
        const idadedd=`idade: ${pessoa.idade} anos`
        const ee= `${pessoa.escolha}`
        const text=`${pessoa.desceição}`
        escrever()
        function escrever(){
            const h2=document.querySelector('.title-card')
            const h3=document.querySelector('.subtitle-card')
            const idade =document.querySelector('.idade')
            const p1=document.querySelector('.text-descriçao')
            const es =document.querySelector('.escolha')
            h2.innerHTML=msg1
            h3.innerHTML=msg2
            idade.innerHTML=idadedd
            p1.innerHTML =text
            es.innerHTML =ee
        }
    })

}

Meuscop()