const genai = require('../config/gemini');

exports.generatePitch = async (req, res) => {

    try {

        const { topic, level } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error('Missing GEMINI_API_KEY in environment variables');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const interaction = await genai.interactions.create({
            model: "gemini-2.5-flash-lite",
            input: `Create a 2-minute elevator pitch about \"${topic}\" for a \"${level}\" audience.`
        });

        return res.status(200).json({
            pitch: interaction.output_text
        });

    } catch (error) {
        if (error.response) {
            console.error(
                'Gemini API Error:', 
                error.response.status, 
                error.response.data
            );
        } else {
            console.error('Request Error:', error.message);
        }

        return res.status(500).json({ message: 'Error generating pitch!' });
    }

}
