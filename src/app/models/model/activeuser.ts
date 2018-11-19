//classe para criar modelos de objetos
export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
}

export class ActiveUser extends Model {
    id: number;
    nome: string;
    email: string;
    id_tipo_usuario: number;
    idioma: number;
    clientes: string;
}