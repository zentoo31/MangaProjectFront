export interface Manga {
    id: string,
    nombre: string,
    autor: string,
    portada: string,
    categorias: [string,string,string],
    descripcion: string,
    estado: string,
    fecha_fin: string,
    fecha_ini: string
}
