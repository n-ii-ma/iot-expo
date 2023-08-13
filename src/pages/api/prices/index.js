import prices from "../../../../data";

export default function handler(req, res) {
  try {
    res.status(200).json(prices);
  } catch (error) {
    const status = error.status || 500;
    res.status(status).json({
      error: {
        status,
        message: error.message || "Internal Server Error",
      },
    });
  }
}
