
const covalent_api_key = process.env.COVALENT_API_KEY;

export default async (req, res) => {
  try {
    if (!covalent_api_key) {
      return res.json({
        status: "err",
        message: 'missing api key',
      });
    }

    const response = await fetch(`https://api.covalenthq.com/v1/1/tokens/0xB8AF61Bf2C0D8D4F65ebeCb4f46124AbDD462699/nft_token_ids/?&key=${covalent_api_key}`).then(res => res.json())
    return res.json({
      tokens: response.data.items,
    });
  } catch (e) {
    console.error("Internal Server Error", e);
    return res.json({
      status: "err",
      message: e,
    });
  }
};