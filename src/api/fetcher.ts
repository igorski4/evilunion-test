import { api } from "./api";

export const fetcher = async (url: string) =>
    await api.get(`${url}`).then((res) => res.data);
