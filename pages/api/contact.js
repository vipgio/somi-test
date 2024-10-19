export default async function handler(req, res) {
    if (req.method !== "POST")
        return res.status(405).json({ error: "Method not allowed" });

    try {
        setTimeout(() => {
            const { firstName, lastName, email, date } = req.body;

            const chance = Math.random();
            if (chance < 0.1) {
                return res.status(500).json({
                    error: `Server error: Failed to process the request ${chance}`,
                });
            }

            const response = {
                message: `Contact form submitted successfully ${firstName} ${lastName}`,
            };

            res.status(200).json(response);
        }, 1000);
    } catch (err) {
        console.error(err);
        res.status(err.response.status).json(err.response.data);
    }
}
