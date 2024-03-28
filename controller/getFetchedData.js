import ApiDataModel from "../model/apiSchema.js";

const filterApiData = async (req, res) => {
    try {
        const { category, limit } = req.query;
        const page = req.query.page || 1
        const userLimit = parseInt(limit)||10
        const skip = (page-1)*userLimit

        let filter = {}
        if (category) {
            filter.Category = new RegExp(category,"i")
        }

        const filteredData = await ApiDataModel.aggregate([{$match:filter}]).skip(skip).limit(userLimit);

        return res.status(200).json({ count: filteredData.length, data: filteredData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default filterApiData;