export enum MessageType{
    none = 'none', 
    info = 'info' ,
    warning = 'warning',
    error = 'success' ,
    loading = 'loading',
}

export interface Message {
    type: MessageType
    dismissable: boolean
    content: string
}
