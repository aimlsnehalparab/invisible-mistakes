app.post("/explain", async (req, res) => {
  const { actions } = req.body;

  const prompt = `
User performed these actions: ${actions.join(", ")}.
Explain what risks they unknowingly exposed.
Keep it calm, educational, non-judgmental.
`;

  const aiResponse = await getAIResponse(prompt);
  res.json({ explanation: aiResponse });
});
