import { AxiosResponse } from "axios";
import { api } from "./api";

export function listBooksService(page: number, category?: string, title?: string): Promise<AxiosResponse> {

    return api.get('/books', {
        params: {
            page,
            amount: 20,
            category,
            title
        }
    });
}