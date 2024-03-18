import { Items } from '../models/Items.js';

const createItems = async (req, res) => {
    try {
        const item = new Items({
            name: req.body.name,
            id: req.body.id,
            barcode: req.body.barcode,
            type: req.body.type,
            content: req.body.content,
            totalWeight: req.body.totalWeight,
            indiWeight: req.body.indiWeight,
            price: req.body.price,
            buyDate: req.body.buyDate
        });
        await item.save();
        res.status(200).json({
            message: 'Item added successfully',
            data: item
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}

const getItems = async (req, res) => {
    try  {
        const { skip, limit } = req.query;
        console.log(skip, limit);
        const items = await Items.find().skip(skip).limit(limit);
        console.log(items)
        res.status(200).json({
            messages: "Items found",
            data: items
        });
    }   
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}

const findItems = async (req, res) => {
    try {
        const { param } = req.params; 
        console.log(param);
        const items = await Items.find({
            $or: [
                { barcode: param },
                { name: { $regex: param.toString(), $options: 'i' } }
            ]
        });
        res.status(200).json({
            message: "Item found",
            data: items
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};


const updateItems = async (req, res) => {
    try { 
        const { barcode } = req.params; 
        const items = await Items.findOneAndUpdate({ barcode: barcode }, req.body, { new: true });
        res.status(200).json({
            message: "Item updated",
            data: items
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}

const deleteItems = async (req, res) => {
    try {
        console.log(req.params);
        const { param } = req.params;
        const deletedItem = await Items.findOneAndDelete({ barcode: param });
        res.status(200).json({ message: "Item deleted successfully" });
    } 
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export { createItems, getItems, findItems, updateItems, deleteItems };
