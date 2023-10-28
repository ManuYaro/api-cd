const db = require('../models')
//const CompactDisc = require('../models/compact_disc')

const {CompactDisc} = db.sequelize.models


//get all rooms
const getAllCompactDiscs = async(request, response)=>
{
    const cd = await CompactDisc.findAll()
    response.json(cd)
}

//get a specific room
const getCompactDisc = async (request, response)=>
{
    const cd = await CompactDisc.findOne({
        where: {
            id: request.params.id
        }
    })

    response.status(200).json(cd)
}

//add a room
const addCompactDisc = async (request, response)=>
{
    const {author, album, title} = request.body
    
    const cd = CompactDisc.build({
        'author': author,
        'album': album,
        'title': title,
    })

    try
    {
        await cd.save()
        response.status(201).json(cd)
    }
    catch(error)
    {
        response.json(error)
    }
}

// update a cd
const updateCompactDisc =  async(request, response)=>
{
    console.log("999999999999")
    const cd = await CompactDisc.findOne({
        where: {
            id: request.params.id
        }
    }) 

    const {author, album, title} = request.body
    
    if(cd)
    {
        cd.set({
            'author': author,
            'album': album,
            'title': title,
        })
        await cd.save()
    }

    response.status(200).json(cd)
}

//delete a cd
const deleteCompactDisc = async (request, response)=>
{
    const cd = await CompactDisc.findOne({
        where: {
            id: request.params.id
        }
    }) 

    if(cd)
    {
        await cd.destroy();
    }
    response.status(200).json(cd)
}


module.exports = {getAllCompactDiscs, addCompactDisc, addCompactDisc, updateCompactDisc, deleteCompactDisc}