import Portfolio from "../models/Portfolio.js";

// Get Portfolio
export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();

    res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create / Update Portfolio
export const updatePortfolio = async (
  req,
  res
) => {
  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
      portfolio = await Portfolio.create(req.body);
    } else {
      portfolio = await Portfolio.findByIdAndUpdate(
        portfolio._id,
        req.body,
        {
          new: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};