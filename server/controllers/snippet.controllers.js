import prisma from "../db/db.config.js";

export const createSnippet = async (req, res) => {
  const { username, language, stdin, sourceCode } = req.body;
  try {
    const snippet = await prisma.snippet.create({
      data: {
        username,
        language,
        stdin,
        sourceCode,
      },
    });
    res.status(201).json({ message: "Snippet created", snippet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSnippets = async (req, res) => {
  try {
    const snippets = await prisma.snippet.findMany();
    res.status(200).json({
      message: "All snippets",
      snippets,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
