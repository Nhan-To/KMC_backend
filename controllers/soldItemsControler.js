import { soldItems } from '../models/soldItems.js'

const createSoldItems = async (req, res) => {
    try {
        const soldItem = new soldItems({
            name: req.body.name,
            id: req.body.id,
            barcode: req.body.barcode,
            type: req.body.type,
            content: req.body.content,
            totalWeight: req.body.totalWeight,
            indiWeight: req.body.indiWeight,
            price: req.body.price,
            unitPrice: req.body.unitPrice,
            revenue: req.body.revenue,
            buyDate: req.body.buyDate,
            sellDate: req.body.sellDate,
        });
        await soldItem.save();
        res.status(200).json({ 
            message: "Item saved successfully",
            data: soldItem
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const getSoldItems = async (req, res) => {
    try {
        const { skip, limit } = req.query;
        const soldItem = await soldItems.find().skip(skip).limit(limit);
        res.status(200).json({
            messages: "Items found",
            data: soldItem
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const findSoldItems = async (req, res) => {
    try {
        const { barcode } = req.params;
        const soldItem = await soldItems.findOne({ barcode });
        res.status(200).json({ 
            message: "Item found", 
            data: soldItem 
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const updateSoldItems = async (req, res) => {
    try {
        const { barcode } = req.params;
        const soldItem = await soldItems.findOneAndUpdate({ barcode }, req.body, { new: true });
        res.status(200).json({ 
            message: "Item updated",
            data: soldItem
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const deleteSoldItems = async (req, res) => {
    try {
        const { barcode } = req.params;
        const deletedItem = await soldItems.findOneAndDelete({ barcode });
        res.status(200).json({ message: "Item deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export { createSoldItems, getSoldItems, findSoldItems, updateSoldItems, deleteSoldItems } 