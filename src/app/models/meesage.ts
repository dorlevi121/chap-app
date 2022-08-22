export interface Message {
    data: string
    timestamp: number;
    from: string;
    to: string;
    isRead: boolean;
}
