import { Request, Response } from "express"
import { hanldeHTTP } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        hanldeHTTP(res, "ERROR_GET_ITEM")
    }
}

const getItems = (req: Request, res: Response) => {
    try {

    } catch (error) {
        hanldeHTTP(res, "ERROR_GET_ITEMS")
    }
}


const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        hanldeHTTP(res, "ERROR_UPDATE_ITEM")
    }
}

const postItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        hanldeHTTP(res, "ERROR_POST_ITEM")
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        hanldeHTTP(res, "ERROR_DELETE_ITEM")
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }