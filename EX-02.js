class pessoa{
    
    constructor(nome){
        this.nome = nome
    }
   
    crasha(){
        console.log('convidado ' + this.nome)
    }
}
class aluno extends pessoa{
    constructor(nome,RA){
        super(nome);
        this.RA = RA
}
    crasha(){
                console.log('Alundio ' + this.nome + 'RA' + this.RA)
} }
            
class graduacao extends aluno{
    constructor(nome,curso){
        super(nome);
            this.curso = curso;

        }
            crasha(){
                console.log('gradiente ' + this.nome + 'Curso' + this.curso)
}    
}   



class professor extends pessoa{
    constructor(nome,materia){
        super(nome);
            this.materia = materia
}
crasha(){
    console.log('profetisador ' + this.nome + 'Matéria: ' + this.materia)
}}

p = new pessoa ("Espinossaro Da Silva")
f = new professor ("Esquisitao Do Melão " ," Cortar Melao" )
a = new aluno ("Famagas oliveira " , " 123456")
c = new graduacao ("Esgoto de lyendell ", "Racismo contra agouros")
p.crasha()
f.crasha()
a.crasha()
c.crasha()