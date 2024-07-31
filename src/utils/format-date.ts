export const formatDate = (dataString: string): string => {
    const date = new Date(dataString);
    return date.toLocaleString('pt-BR', {
        dateStyle: 'medium',
    });
}