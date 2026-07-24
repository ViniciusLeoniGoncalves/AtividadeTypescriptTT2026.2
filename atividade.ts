type Prioridade = "baixa" | "media" | "alta";

interface Tarefa {
    titulo: string;
    prioridade: Prioridade;
    categoria?: string;
}

const listaDeTarefas: Tarefa[] = [];

function adicionarTarefa(Titulo: string, Prioridade: Prioridade, Categoria?: string) : string  {
    let t: Tarefa = { //criando por objeto generico, pois descobri que a linguagem permite fazer isso sem classes
        titulo: Titulo,
        prioridade: Prioridade,
        categoria: Categoria
    };
    if((t.titulo!=undefined && t.prioridade!=undefined) && ["baixa","media","alta"].includes(t.prioridade)){
        listaDeTarefas.push(t);
    }
    if(listaDeTarefas.includes(t)){
        return "tarefa '" + t.titulo + "' adicionada com sucesso e a lista agora tem " + listaDeTarefas.length + " tarefa(s)!!!";
    }
    else{
        return "Erro grave!!! A tarefa não foi adicionada"
    }
}

function listarTarefasPorPrioridade(prioridade: Prioridade): Tarefa[] {
    let tarefasPrioridade: Tarefa[]=[];
    if(!["baixa","media","alta"].includes(prioridade)){
      console.error("Tipo de prioridade fornecido é inválido");
      return;
    }
    for(let i: number = 0;i<listaDeTarefas.length;i++){
        if(listaDeTarefas[i].prioridade==prioridade){
            tarefasPrioridade.push(listaDeTarefas[i]);
        }
    }

    return tarefasPrioridade;
}


//remova os comentarios conforme implemente as funções para testá-las
/*---------------------------------
    TESTE SUAS FUNÇÔES AQUI!
---------------------------------*/

console.log(adicionarTarefa("Ver as aulas do TT", "alta", "Estudo"));
console.log(adicionarTarefa("Fazer compras", "baixa"));
console.log(adicionarTarefa("Praticar exercícios", "alta", "Saúde"));
console.log("Tarefas de alta prioridade:", listarTarefasPorPrioridade("alta"));
console.log("Tarefas de baixa prioridade:", listarTarefasPorPrioridade("baixa"));


//adicionei mais testes
console.log("Tarefas de 2 prioridade:", listarTarefasPorPrioridade(2));
console.log("Tarefas de batata prioridade:", listarTarefasPorPrioridade("batata"));
console.log("Tarefas de media prioridade:", listarTarefasPorPrioridade("media"));
console.log("Tarefas de media prioridade:", listarTarefasPorPrioridade("média"));

console.log(listaDeTarefas);
console.log(adicionarTarefa());
console.log(adicionarTarefa(undefined, undefined, undefined));
console.log(adicionarTarefa("undefined", "undefined", "undefined"));
console.log(listaDeTarefas);
