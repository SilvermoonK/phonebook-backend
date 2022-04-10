import { Sequelize } from "sequelize/types";
import ApiError from "../utils/apiError";

//database
import db from './config/database'

//model
import Contacts from "../models/contactsModel";

const newContact = async (req, res, next) => { //Handler for creating a new contact

    let updateID = req.body.ID // ID in case user wants to update contact
    let newName = req.body.name //name from create contact form
    let newPhone = req.body.phone //phone number from create contact form
    let newAddress = req.body.address.split(" ")

    if (updateID) {
        await Contacts.update({
            ID: updateID,
            name: newName, 
            phone: newPhone, 
            userEmail: newUserEmail, 
            addressLines: newAddress
        }) 
        .catch(next(ApiError.badRequest(err.message)))
        
        return res.type(json).status(202).send('Contact Updated')
    }
    await Contacts.create({
        name: newName, 
        phone: newPhone, 
        userEmail: newUserEmail, 
        addressLines: newAddress
    })

    return res.type('json').status(202).send(newContact.firstName + '\'s contact ID is ' + newContact.id)

    .catch(next(ApiError.badRequest(err.message)))
    }


const getAllContacts = async (req, res) => { //Handler to get all contacts

    const allContacts = await Contacts.findAll({
        order:[
            ['firstName', ASC]
        ]
    })
        
    return res.type('json').json(allContacts)

    .catch(next(ApiError.badRequest(err.message)))
}

const getContact = async (req, res) => { //Handler to get a contact by id
    let ID = req.body.ID
    let userEmail = req.body.userEmail


    const contact = await Contacts.findAll({
        where: {
            ID: ID, 
            userEmail: userEmail
        }
    })

        if (!contact) {
            return res.status(404).send('Not Found')
        }

    return res.status(200).type('json').json(contact)

    .catch(next(ApiError.badRequest(err.message))) 
}

const deleteContact = (req, res) => { //Handler to delete a contact by id 
    let delContactId = req.params.ID

    await Contacts.destroy({
        where: {
            ID: delContactId
        }
    })

    res.status(204).send('Contact deleted')

    .catch(next(ApiError.badRequest(err.message)))
}

export {newContact, getAllContacts, getContact, deleteContact }