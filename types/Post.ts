export interface Post {
    createdAt: string,
    description: string,
    id: string,
    image: string,
    preview: string,
    title: string,
    variables?: Object,
    query?: string,
    operationName?: string,
}