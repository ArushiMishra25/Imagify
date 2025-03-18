import FormData from "form-data";
import axios from "axios";

import "dotenv/config.js";
import userModel from "../models/userModel.js";
export const generateImage = async (req, res) => {
  try {
    const { userid, prompt } = req.body; //again use of middleware

    const user = await userModel.findById(userid);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();

    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:image/jpeg;base64,${base64Image}`;

    user.creditBalance = user.creditBalance - 1;

    await userModel.findByIdAndUpdate(userid, {
      creditBalance: user.creditBalance,
    });
    res.json({
      success: true,
      image: resultImage,
      creditBalance: user.creditBalance,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
