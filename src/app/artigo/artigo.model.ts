export class Artigo {
    descricao: string;
    url: string;
    notas: number[];

    constructor(descricao: string, url: string, notas?: number[]) {
            this.descricao = descricao;
            this.url = url;
            this.notas = notas || [];
    }

    media(): number {
        return this.calcularMedia(this.notas);
    }

    calcularMedia(arr: number[]): number {
        let soma = 0;
        for (let i = 0; i < arr.length; i++) {
          soma += arr[i];
        }
        return Math.round(100 * (soma / arr.length ) ) / 100;
      }
    
}
