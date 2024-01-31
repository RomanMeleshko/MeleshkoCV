interface Todo {
    link: string;
    icon: string;
}

interface Note {
    id: number;
    name?: string;
    class?: string;
    title?: string;
    links?: Array<Todo>;
    phone?: string;
    email?: string;
    place?: string;
}

export default Note
