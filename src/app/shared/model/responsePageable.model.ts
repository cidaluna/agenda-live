export class ResponsePageable{
    // Aula 07 Criando pageable model, realizando o mapeamento dos atributos que o Backend retorna para o Front.
    content!: any[];
    first!: boolean;
    last!: boolean;
    number!: number;
    numberOfElements!: number;
    pageable!: any[];
    size!: number;
    sort!: number;
    totalElements!: number;
    totalPages!: number;
}
