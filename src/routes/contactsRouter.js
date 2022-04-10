import express from "express";
import { newContact, getAllContacts, getContact, deleteContact } from "../controllers/contactsController";
import checkJwt from "../utils/checkJWT";
import methodNotAllowed from "../utils/notAllowedHandler";

const router = express.Router();


router.get('/', checkJwt, getAllContacts) //Endpoint to get all contacts

router.get('/:id', checkJwt, getContact) //Endpoint to get a contact by id

router.post('/', checkJwt, newContact) //Endpoint to create a new contact

router.delete('/id', checkJwt, deleteContact) //Endpoint to delete a contact by id

router.all(methodNotAllowed)

export { router as contactsRouter }