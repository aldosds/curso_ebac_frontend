const alunos = [
    {nome: 'Gustava', nota: 7},
    {nome: 'Julia',   nota: 6},
    {nome: 'Wagner',  nota: 8},
    {nome: 'Paula',   nota: 5}
];

const alunos2 = alunos.filter(function(alunos) {
    
        return alunos.nota  >= 6;    

})

console.log(alunos2);

