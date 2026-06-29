
const validateRequest = (req, res, next) => {

    const { topic, level } = req.body;

    if (!topic || !level) {
        return res.status(400).json({ message: "Missing required fields: topic and level" })
    }
    
    next();
};

module.exports = validateRequest;
