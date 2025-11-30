export default async function handler(req, res) {
    const query = req.query.q || "India";

    const apiRes = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`
    );

    const data = await apiRes.json();
    res.status(200).json(data);
}
