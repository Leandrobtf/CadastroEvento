var part_idade = 18;
const participantes = ['Lucas', 'Beatriz', 'Luisa', 'Gabriela', 'Sarah', 'João', 'Cleiton', 'Marcos']
const palestrantes = ['Laura','Érica','Guilherme','Pedro','Fernando']
qnt_part = participantes.length;
const dataAtual = new Date();
const dataEvento = new Date('2021-09-07 12:30:00');

//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
if(dataEvento > dataAtual){
    console.log("Evento Permitido!");
   
    //Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
    if(part_idade >= 18){
        console.log("Cadastro Permitido.");
        
        //Listar participantes e palestrantes por evento.
        console.log("\nParticipantes: ")
        for(let i = 0; i < qnt_part; i++){
            const part = participantes[i];
            console.log(part);
        }
        console.log("\nPalestrantes: ")
        for(let x = 0; x < palestrantes.length; x++){
            const pale = palestrantes[x];
            console.log(pale);
        }
       
        //Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
        if(qnt_part < 100){
            console.log("\nCadastro realizado com sucesso!"); 
        }else console.log("Cadastro Negado!");

    }else console.log("Cadastro Negado. Você ainda é menor de idade!");

}else console.log("Data Inválida! Cadastro não permitido! ");