import { atom } from "recoil";
export interface Blog {
    "id": string,
    "title": string,
    "content": string,
    "createdAt": string,
    "author": {
        "name": string
    }
}
export const centralBlogsAtom=atom<Blog[]>({
    key:"blogAtom",
    default:[]
})

export const filteredBlogsAtom=atom<Blog[]>({
    key:"FilteredBlogAtom",
    default:[]
})